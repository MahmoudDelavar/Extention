chrome.runtime.sendMessage({ todo: "ActiveIcon" });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "changeSubtitle") {
    console.log("msg from Content.js, Change the Subtitle");
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "changeLanguage") {
    console.log("msg from Content.js, Change the Language");
  }
});
chrome.runtime.sendMessage({ test_1: "from_content" });
