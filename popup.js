document.addEventListener("DOMContentLoaded", function() {

    let backgroundPage = chrome.extension.getBackgroundPage();
    let toggler = document.getElementById("toggler")

    toggler.checked = backgroundPage.isExtensionOn
   
    toggler.addEventListener('change',function(e){
   
   backgroundPage.isExtensionOn = !backgroundPage.isExtensionOn;
    })
    
  })

