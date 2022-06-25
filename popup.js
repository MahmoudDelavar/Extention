$(document).ready(function () {
  $("#btnLanguage").click(function (e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { todo: "changeLanguage" });
    });
    console.log("msg from popup.js , Language Clicked");
    $("#ln_msg").fadeIn(1000);
    $("#ln_msg").css("color", "#a2ebeb");
    $("#ln_msg").fadeOut(1000);
  });

  $("#btnSubtitle").click(function (e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { todo: "changeSubtitle" });
    });
    console.log("msg from popup.js , Subtitle Clicked");
    $("#sb_msg").fadeIn(1000);
    $("#sb_msg").css("color", "#a2ebeb");
    $("#sb_msg").fadeOut(1000);
  });
});
