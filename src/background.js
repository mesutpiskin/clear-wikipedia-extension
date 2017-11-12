chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var url = tab.url;
  if (url.search(".wikipedia.org/") != -1 && url.search(".0wikipedia") == -1) {
    newUrl = url.replace(".wikipedia", ".0wikipedia");
    chrome.tabs.update(tabId, {url: newUrl});
  }
  else {
    return;
  }
});
