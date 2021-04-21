$(document).on('keydown' , function(e){
  makeSound(e.key);
  buttonAnimation(e.key);
})

$('.btn').on('click' , function(){
    makeSound(this.id)
})

function makeSound(key)
{
    switch(key)
    {
        case 'w': var tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
        break;

        case 'a': var tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();
        break;

        case 's': var tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
        break;

        case 'd': var tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play();
        break;

        case 'f': var crash = new Audio('sounds/crash.mp3')
        crash.play();
        break;

        case 'g': var tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
        break;

        case 'j': var snare = new Audio('sounds/snare.mp3')
        snare.play();
        break;

        case 'k': var tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
        break;

        case 'l': var kickBass = new Audio('sounds/kick-bass.mp3')
        kickBass.play();
        break;

        case 'W': var tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
        break;

        case 'A': var tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();
        break;

        case 'S': var tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
        break;

        case 'D': var tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play();
        break;

        case 'F': var crash = new Audio('sounds/crash.mp3')
        crash.play();
        break;

        case 'G': var tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
        break;

        case 'J': var snare = new Audio('sounds/snare.mp3')
        snare.play();
        break;

        case 'K': var tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
        break;

        case 'L': var kickBass = new Audio('sounds/kick-bass.mp3')
        kickBass.play();
        break;


    }
}

function buttonAnimation(key)
{
  var buttonId = '.' + key;
  $(buttonId).animate({opacity: 0.5}, 100).animate({opacity: 1}, 100)
}