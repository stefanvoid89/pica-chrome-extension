

 let inputs =    document.getElementsByTagName('input')

    Array.from(inputs).
    forEach(input => {
        input.addEventListener("keyup",function(e){
            switch (e.keyCode) {
                case 13:
            chrome.runtime.sendMessage({type: "alertUser",text:"fuck you"});  
        }})
    })

  