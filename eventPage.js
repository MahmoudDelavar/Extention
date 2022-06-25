chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "ActiveIcon") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
    });
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.runtime.sendMessage({ test_1: "from content" });
  if (request.test_1 == "from_content") {
    console.log(
      "msg from  Bachground(eventPage.js) and recived this=",
      request.test_1
    );
  }
});
