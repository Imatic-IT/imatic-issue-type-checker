window.onload = function () {
  function getSettings() {
    const el = document.querySelector("#imaticIssueType");
    if (el == null) {
      return;
    }

    return JSON.parse(el.dataset.data);
  }

  let settings = getSettings();
  settings.issue_view_state = parseInt(settings.issue_view_state);
  const bugForm = document.querySelector("#bugnoteadd");
  const addButton = bugForm.querySelector('input[type="submit"]');
  const addPublicButton = document.querySelector("#add_public_bugnote");
  const checkBoxViewStatus = document.querySelector("#bugnote_add_view_status");
  const butnoteTextArea = document.querySelector("#bugnote_text");
  const loader = document.getElementById("loader");
  const confirmBugnote = document.getElementById("confirm_bugnote");

  bugnoteConfirm(true);

  addPublicButton.addEventListener("click", function (e) {
    checkBoxViewStatus.checked = false;
    butnoteTextArea.classList.remove("bugnote-private");

    switch (settings.issue_view_state) {
      case 50:
        e.preventDefault();
        bugnoteConfirm(
          false,
          settings.warning_private_issue_public_bugnote.message
        );
        break;
      default:
        showLoader();
        break;
    }
  });

  // Left button, default mantis add bugnote button
  addButton.addEventListener("click", function (e) {
    switch (settings.issue_view_state) {
      case 10:
        if (checkBoxViewStatus.checked) {
          if (settings.warning_public_issue_private_bugnote.allow) {
            e.preventDefault();
            bugnoteConfirm(
              false,
              settings.warning_public_issue_private_bugnote.message
            );
          } else {
            showLoader();
          }
        } else {
          showLoader();
        }
        break;
      case 50:
        if (!checkBoxViewStatus.checked) {
          if (settings.warning_private_issue_public_bugnote.allow) {
            e.preventDefault();
            bugnoteConfirm(
              false,
              settings.warning_private_issue_public_bugnote.message
            );
          } else {
            showLoader();
          }
        } else {
          showLoader();
        }
        break;
      default:
        showLoader();
        break;
    }
  });

  addButton.insertAdjacentElement("afterend", addPublicButton);

  function setIssuePublic() {
    $.ajax({
      url: getUrl(),
      type: "POST",
      dataType: "json",
      success: function (data) {
        if (data.affected_row) {
          loader.style.display = "none";
          AddNoteClick()
        }
      },
      error: function (xhr, status, error) {
        console.error(error);
      },
    });
  }

  function showLoader() {
    loader.style.display = "block";
  }

  function getUrl() {
    const url = settings.set_issue_public_url;
    return url;
  }

  function bugnoteConfirm(access_buttons = false, msg = null) {
    const closeButton = document.getElementById("close_bugnote_congirm_modal");
    const publicIssueSendBugnote = document.getElementById(
      "public_issue_send_bugnote"
    );
    const sendBugnote = document.getElementById("send_bugnote");

    closeButton.addEventListener("click", function () {
      closeModal();
    });

    if (access_buttons) {
      if (publicIssueSendBugnote) {
        setPublicIssueButtonAccess(publicIssueSendBugnote);
      }
    }

    if (access_buttons) return;

    showModal();

    const modalBody = document.getElementById("bugnote_modal_confirm_message");
    modalBody.textContent = msg;

    if (publicIssueSendBugnote) {
      publicIssueSendBugnote.addEventListener("click", function (e) {
        const clickedButtonValue = e.target.value;
        setIssuePublic();
        showLoader();
      });
    }

    sendBugnote.addEventListener("click", function (e) {
      AddNoteClick()
      showLoader();
    });
  }

  // Remove set public button if user do not have permision to  change status or it is turn off
  function setPublicIssueButtonAccess(btn) {
    if (!settings.allow_set_public_issue.allow) {
      btn.remove();
    }
    if (!settings.allow_set_public_issue.change_status_access) {
      btn.remove();
    }
    if (settings.issue_view_state == 10) {
      btn.remove();
    }
  }

  function showModal() {
    confirmBugnote.classList.add("show");
    confirmBugnote.classList.remove("fade");
  }

  function closeModal() {
    confirmBugnote.classList.remove("show");
    confirmBugnote.classList.add("fade");
  }

  function AddNoteClick() {
    addButton.dispatchEvent(new MouseEvent("click"));
  }
};
