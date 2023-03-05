## Imatic Issue type Checker

## Mantis plugin

[![N|Solid](https://www.imatic.cz/img/logo.png)](https://www.imatic.cz/)

## Features

Warns while adding notes, depends on view state

- Added button send public note

- If the issue is private, a confirmation window will pop up asking if you want to set the issue to public, if yes, the issue will be set to public and a public note will be inserted, otherwise only a public note  will be added, this can by turn off in plugin config `allow_set_public_issue`

- If issue is public and you will want to add private bugnote, confirmation window will pop up asking, if you want to send private bugnote

- Showing message view state of issue on the top of bugnote form, can by turn off on plugin config ('show_issue_status' => true)



## Requirements

- [mantis bug tracker](https://www.mantisbt.org/)
- [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker)

## Installation

- Copy all files from [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker) into plugins/ImaticIssueTypeChecker.

- In mantis plugins, install [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker)


## Config

- `show_issue_status` (boolean): Whether to show the issue status.

- `allow_set_public_issue` (array): Options for allowing to set an issue as public by request button.

- `allow` (boolean): Whether to allow setting an issue as public.

- `warning_public_issue_private_bugnote` (array): Options for warning when adding a private bugnote to a public issue.

- `allow` (boolean): Whether to allow show confirm adding a private bugnote to a public issue.

- `message` (string): The warning message to display.

- `warning_private_issue_public_bugnote` (array): Options for warning when adding a public bugnote to a private issue.

- `allow` (boolean): Whether to allow allow show confirm adding a public bugnote to a private issue.

- `message` (string): The warning message to display.

### Config code

```php
    public function config(): array
    {
        return [
            'show_issue_status' => true,
            'allow_set_public_issue' => [
                'allow' => true,
            ],
            'warning_public_issue_private_bugnote' => [
                'allow' => true,
                'message' => 'Issue is public do you want to add private note ? '
            ],
            'warning_private_issue_public_bugnote' => [
                'allow' => true,
                'message' => 'Do you want to add a public note to a private issue? Nobody will see the note.'
            ]
        ];
    }