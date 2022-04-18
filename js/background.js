var toggle =false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (toggle){
    chrome.browserAction.setIcon({path: "icons/32_off.png", tabId:tab.id});
    chrome.tabs.executeScript( null, {code:"document.querySelector('#hf36g4o44ski2jegdt79').remove();"});
  }
  else{
    chrome.browserAction.setIcon({path: "icons/32.png", tabId:tab.id});
    chrome.tabs.executeScript( null, {code:"document.head.insertAdjacentHTML('beforeend', `<style id='hf36g4o44ski2jegdt79'>[class*='Value'],[data-key='runcode-result-content']{max-height:none;}</style>`);"});
  }
  toggle = !toggle;
});