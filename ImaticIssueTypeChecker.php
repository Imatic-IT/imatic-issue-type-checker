<?php

class ImaticIssueTypeCheckerPlugin extends MantisPlugin
{
    public function register(): void
    {
        $this->name = 'Imatic issue checker';
        $this->description = 'Warning when private issue has public note && added button send public note';
        $this->version = '0.0.1';
        $this->requires = [
            'MantisCore' => '2.0.0',
        ];

        $this->author = 'Imatic Software s.r.o.';
        $this->contact = 'info@imatic.cz';
        $this->url = 'https://www.imatic.cz/';
    }

    public function config(): array
    {
        return [
            'show_issue_status' => true,
            'allow_set_public_issue' => true,
        ];
    }

    public function hooks(): array
    {
        return [
            'EVENT_LAYOUT_BODY_END' => 'layout_body_end_hook',
            'EVENT_BUGNOTE_ADD_FORM' => 'event_bugnote_add_form',
        ];
    }


    public function event_bugnote_add_form($p_event)
    {

        if (isset($_GET['id'])) {
            $issue_id = $_GET['id'];
            $issue = bug_get_row($issue_id);

            // Just UI loader
            echo '<div style="display:none;" id="loader"></div>';

            echo '<a style="display:none;" id="issue_set_public_link" href="' . plugin_page('set_issue_public') . '&issue_id=' . $issue_id . '"> aaa</a>';
            echo '<button class="btn btn-primary btn-white btn-round"  id="add_public_bugnote" type="submit">Pridať verejnú poznámku</button>';


            if (plugin_config_get('show_issue_status')) {
                $this->imaticShowViewStateIssueMessage($issue);
            }
        }
    }


    public function  imaticShowViewStateIssueMessage($issue)
    {

        $view_state_issue =  $issue['view_state'] == 50 ? lang_get( 'private' ) : lang_get( 'public' );
        $class = $issue['view_state'] == 50 ? 'bg-warning' : 'bg-success';

        echo '<p style="margin: 5px;padding: 5px;" class=" '.$class.'">'.$view_state_issue.' issue</p>';

    }


    public function layout_body_end_hook($p_event)
    {
        if (isset($_GET['id'])) {
            $issue_id = $_GET['id'];
            $issue = bug_get_row($issue_id);

            $t_data = htmlspecialchars(json_encode([
                'issue_view_state' => $issue['view_state'],
                'set_issue_public_url' => $_SERVER['HTTP_HOST'] . plugin_page('set_issue_public'),
                'allow_set_public_issue' => plugin_config_get('allow_set_public_issue')

            ]));
            echo '<script id="imaticIssueType" data-data="' . $t_data . '" src="' . plugin_file('issue_checker.js') . '&v=' . $this->version . '"></script>
            <link rel="stylesheet" type="text/css" href="' . plugin_file('style.css') . '&v=' . $this->version . '" />';
        }
    }
}
