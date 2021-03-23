var anime = require('animejs').default;

document.addEventListener("DOMContentLoaded", ()=>{
    var element = document.getElementById('section')
    document.addEventListener("keydown", (e) => {
        if(e.code === "KeyA"){
            debugger
            anime({
                loop: 2,
                        targets: [element], 
                rotate: {
                    value: 360,
                      duration: 1800,
                    easing: 'easeInOutSine'
                },
                scale: {
                    value: 2,
                    duration: 1600,
                    delay: 800,
                    easing: 'easeInOutQuart'
                    },
                delay: 250 // All properties except 'scale' inherit 250ms delay
            })
        }
    })
    
    console.log("The DOM content has been loaded.")
})