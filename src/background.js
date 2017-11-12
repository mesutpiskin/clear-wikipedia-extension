chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var url = tab.url;
  if (url.search(".wikipedia") != -1 && url.search(".0wikipedia") == -1) {
    newUrl = url.replace(".wikipedia", ".0wikipedia");
    chrome.tabs.update(tabId, {url: newUrl});
  }
  else {
    return;
  }
});

// mesut=document.getElementById("mesut");
// mesut.on
//
// function openInNewTab(id) {
//   links={"http://www.mesutpiskin.com","https://github.com/RamazanM"};
//   alert();
//   var win = window.open(links[id], '_blank');
//   win.focus();
// }
