chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
   var url=changeInfo.url;
   var newUrl;
   if(url.search("https://tr.wikipedia") != -1 ){
	  newUrl=url.replace("https://tr.wikipedia", "https://tr.0wikipedia");	  	   
   }
   else if (url.search("https://en.wikipedia") != -1)
   {
	     newUrl=url.replace("https://en.wikipedia", "https://en.0wikipedia");
   }
   else
	{
	   return;
	}
	 
	chrome.tabs.create({url: newUrl});
})

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){
     console.log(tab.url);
  });
}); 