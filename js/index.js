// Here you can access the colors variable
// have fun

let btnRandom = document.getElementById("btn");
let randomColor;
let pallete = document.getElementById("pallete")
let input = document.getElementById("color")
let controlo = document.getElementById("control")

btnRandom.addEventListener("click",function(){
        randomColor=colors[Math.floor(Math.random()*12.5)]
        pallete.style.backgroundColor=randomColor
        input.value=randomColor
        controlo.style.color=randomColor
        input.style.backgroundColor=randomColor
        btnRandom.style.backgroundColor=randomColor


})


input.addEventListener("change",function(){
    let test = input.value
    pallete.style.backgroundColor=test
})

