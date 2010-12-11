chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse({data: document.getSelection().toString()});
});