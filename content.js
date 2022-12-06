// LinkedIn Recent Posts Button by jessekhala.com
// Add Button Function
function addButton() {
  let profileHeader = document.querySelector(".pv-top-card-v2-ctas");
  if (profileHeader) {
    let button = document.createElement("button");
    button.innerHTML = "Recent Posts";
    button.className =
      "artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view";
    button.addEventListener("click", function () {
      window.location.href =
        window.location.href + "/detail/recent-activity/shares/";
    });
    profileHeader.appendChild(button);
  }
}

addButton();
