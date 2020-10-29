chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: ["*://*.doubleclick.net/*","*://*.youtube.com./watch/*","*://*.ads/*"] },
    ["blocking"]
  );