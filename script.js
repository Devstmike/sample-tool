let control = document.querySelector(".control");
let widthRange = document.querySelector(".widthrange");
let setwidthRange = document.querySelector(".setwidthrange");
let switches = document.querySelectorAll(".switch p");
let mypole = document.querySelectorAll(".pole");
let switchvalue = document.querySelector(".switchvalue")


widthRange.oninput = () => {
    control.style.width =  `${widthRange.value}%`
    console.log(widthRange.value)
    setwidthRange.innerText = "$" + widthRange.value * 112
    console.log(switches[1])
    if(switches[1].classList.contains("active")){
       switchvalue.innerText = "+" + (widthRange.value * 112 ) / 2  
    }
}

switches.forEach( (swi, index) => {
    swi.onclick = () => {

    switches.forEach( (swi, index) => {
        swi.classList.remove("active")
    })

        if(index == 0){
            swi.classList.add("active")
            mypole.forEach((po) => {
                po.classList.add("hideme")
            })
            switchvalue.innerText = 0
        } else if(index == 1){
            swi.classList.add("active")
            mypole.forEach((po) => {
                po.classList.remove("hideme")
                switchvalue.innerText = 0

            })
        }
    }
})