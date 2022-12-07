// LinkedIn Recent Posts Button by jessekhala.com
// Add Button Function
function addRecentPostsButton() {
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

// Attach event listeners for the popstate and pushstate events
window.addEventListener("popstate", addRecentPostsButton);
window.addEventListener("pushstate", addRecentPostsButton);

// Add the button
addRecentPostsButton();
