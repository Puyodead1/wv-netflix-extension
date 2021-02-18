chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: chrome.extension.getURL("cadmium-playercore-6.0026.529.051.js"),
    };
  },
  {
    urls: [
      "*://assets.nflxext.com/*/ffe/player/html/*",
      "*://www.assets.nflxext.com/*/ffe/player/html/*",
    ],
  },
  ["blocking"]
);
