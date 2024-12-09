document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is the index.html
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    // Create the welcoming message
    const welcomeMessage = document.createElement("div");
    welcomeMessage.id = "welcome-message";
    welcomeMessage.textContent =
      "Welcome to John & Joe Strength and Hypertrophy! Contact us by filling the form in Contact page";

    // Insert the message at the top of the body content
    const body = document.getElementById("body");
    body.parentNode.insertBefore(welcomeMessage, body);
  }
});
