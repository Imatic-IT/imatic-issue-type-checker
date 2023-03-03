## Imatic Issue type Checker

## Mantis plugin

[![N|Solid](https://www.imatic.cz/img/logo.png)](https://www.imatic.cz/)

## Features

Warns while adding notes, depends on view state

- Added button send public note

- If the issue is private, a confirmation window will pop up asking if you want to set the issue to public, if yes, the issue will be set to public and a public note will be inserted, otherwise only a public note  will be added, this can by turn off in plugin config ('allow_set_public_issue' => true).

- If issue is public and you will want to add private bugnote, confirmation window will pop up asking, if you want to send private bugnote

- Showing message view state of issue on the top of bugnote form, can by turn off on plugin config ('show_issue_status' => true)


## Requirements

- [mantis bug tracker](https://www.mantisbt.org/)
- [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker)

## Installation

- Copy all files from [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker) into plugins/ImaticIssueTypeChecker.
  
- In mantis plugins, install [imatic mantis issue type checker ](https://github.com/Imatic-IT/imatic-mantis-issue-type-checker)
