<?php

require_api('authentication_api.php');

auth_ensure_user_authenticated();


if (isset($_GET['issue_id']) && !empty($_GET['issue_id'])) {
    $issue_id = $_GET['issue_id'];

    $affected_row = imaticUpdateViewState($issue_id);

    $response = [
        'issue_id' => $issue_id,
        'affected_row' => $affected_row
    ];

    imatic_send_response(200, $response);
}


function imaticUpdateViewState($issue_id)
{
    $db = db_get_table('bug');
    $sql = "UPDATE " . $db . " SET view_state=10 WHERE id=" . $issue_id;
    db_query($sql);
    return  db_affected_rows();
}


function imatic_send_response(int $status = 200, $data = null)
{
    header('Content-Type: application/json');
    http_response_code($status);
    echo json_encode($data);
}
