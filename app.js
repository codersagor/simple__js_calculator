// click sound file 
const audio = document.getElementById("audio")
// all btns 
let btns = document.querySelectorAll('button[data-num]')
// display 
const screen = document.getElementById("display");
// equal btn 
const equal__btn = document.getElementById("equal__btn")
// clear btn 
const clear__btn = document.getElementById("clear__btn")

// play sound while click function 
btns.forEach(function(btn) {
    btn.addEventListener("mousedown", playSound(btn));
    btn.addEventListener('click', function() {
        let number = btn.getAttribute('data-num');
        screen.value += number
    })
})



function playSound(ele) {
    ele.addEventListener("mousedown", ()=> {
        audio.play();
    })
}

equal__btn.addEventListener('click', function() {
    playSound(this);

    let value = screen.value;

    screen.value = eval(screen.value)
})

clear__btn.addEventListener("mousedown", function() {

    // clear screen value 
    screen.value = "";

    // playSound 
    playSound(this);

})