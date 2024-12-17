chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      console.log("Tab updated with URL:", changeInfo.url);
  
      chrome.tabs.query({}, function(tabs) {
        let existingTabFound = false;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].url && 
              tabs[i].url === changeInfo.url && 
              tabs[i].id !== tabId) {
            console.log("Found duplicate tab with URL:", tabs[i].url);
            chrome.tabs.update(tabs[i].id, { active: true });
            chrome.tabs.remove(tabId);
            console.log("Closed duplicate tab and activated existing tab.");
            existingTabFound = true;
            break;
          }
        }
        if (!existingTabFound) {
          console.log("This is the first tab with URL:", changeInfo.url);
        }
      });
    }
  });