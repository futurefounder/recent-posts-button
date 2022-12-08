// LinkedIn Recent Posts Button by jessekhala.com
// Add Button Function
function addRecentPostsButton(time = 0) {
  let profileHeader = document.querySelector(".pv-top-card-v2-ctas");
  if (
    profileHeader &&
    document.getElementById("recent-posts-button") === null
  ) {
    let button = document.createElement("button");
    button.innerHTML = "Recent Posts";
    button.id = "recent-posts-button";
    button.className =
      "artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view";
    button.addEventListener("click", function () {
      window.location.href =
        window.location.href + "/detail/recent-activity/shares/";
    });
    profileHeader.appendChild(button);
  }
  setTimeout(() => addRecentPostsButton(time + 100), 100);
}

// Attach event listeners for the popstate and pushstate events
window.addEventListener("popstate", addRecentPostsButton);
window.addEventListener("pushstate", addRecentPostsButton);

// Add button
addRecentPostsButton();
