
var isExtensionOn = true;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
if(isExtensionOn){
    var audioElement = new Audio('razumem.m4a');
    function togglePlayPause() {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
    switch(message.type) {
      case "alertUser":
        togglePlayPause();
        break;
    }
}

  });




