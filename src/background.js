chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var url = tab.url;
  if (
    url.search(".wikipedia.org") != -1 &&
    url.search(".0wikipedia.org") == -1
  ) {
    newUrl = url.replace(".wikipedia.org", ".0wikipedia.org");
    chrome.tabs.update(tabId, { url: newUrl });
  } else if (
    url.search(".vikipedi.org") != -1 &&
    url.search(".0vikipedi.org") == -1
  ) {
    newUrl = url.replace(".vikipedi.org", ".0vikipedi.org");
    chrome.tabs.update(tabId, { url: newUrl });
  } else {
    return;
  }
});
