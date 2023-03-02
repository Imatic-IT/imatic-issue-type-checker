window.onload = function () {
  function getSettings() {
    const el = document.querySelector("#imaticIssueType");
    if (el == null) {
      return;
    }

    return JSON.parse(el.dataset.data);
  }

  let settings = getSettings();

  const bugForm = document.querySelector("#bugnoteadd");
  const addButton = bugForm.querySelector('input[type="submit"]');
  const addPublicButton = document.querySelector("#add_public_bugnote");
  const checkBoxViewStatus = document.querySelector("#bugnote_add_view_status");
  const butnoteTextArea = document.querySelector("#bugnote_text");
  const loader = document.getElementById("loader");

  addPublicButton.addEventListener("click", function (e) {
    checkBoxViewStatus.checked = false;

    butnoteTextArea.classList.remove("bugnote-private");
    if (settings.issue_view_state == 50 && settings.allow_set_public_issue) {
      const result = confirm(
        "Issue je súkromný chceli by ste ho zmenit na verejný a odoslat poznámku ?"
      );

      if (result) {
        loader.style.display = "block";
        setIssuePublic(Callback);
      } else {
        return;
      }
    }
  });

  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    checkBoxViewStatus.checked = true;
    butnoteTextArea.classList.add("bugnote-private");
    const result = confirm("Issue je súkromný chcete pridat poznámku  ?");

    if (result) {
      bugForm.submit();
    } else {
      return false;
    }
  });

  addButton.insertAdjacentElement("afterend", addPublicButton);

  function setIssuePublic(callback) {
    let url = getUrl();

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error(error));
  }

  function Callback(response) {
    if (response.affected_row) {
      loader.style.display = "none";
    }
  }

  function getUrl() {
    const url = document
      .getElementById("issue_set_public_link")
      .getAttribute("href");

    return url;
  }
};
