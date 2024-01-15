let botoes = document.querySelectorAll('.drum');
let crash = new Audio('./sounds/crash.mp3') 
let kick = new Audio('./sounds/kick-bass.mp3') 
let snare = new Audio('./sounds/snare.mp3') 
let tom1 = new Audio('./sounds/tom-1.mp3') 
let tom2 = new Audio('./sounds/tom-2.mp3') 
let tom3 = new Audio('./sounds/tom-3.mp3') 
let tom4 = new Audio('./sounds/tom-4.mp3') 

let audio = [crash,kick,snare,tom1,tom2,tom3,tom4]

for (let index = 0; index < botoes.length; index++) {
    botoes[index].addEventListener('click', function (){   
        tecla = botoes[index].textContent;
        makeSounds(tecla);
        ButtonAnimation(tecla);        
    });    
}

document.addEventListener('keydown', function(event){
    makeSounds(event.key); 
    ButtonAnimation(event.key);    
})


function makeSounds(key){
    switch (key){
        case 'w':   
            crash.play();  
            crash.currentTime =0; 
                break;
            case 'a':   
            kick.play();  
            kick.currentTime =0; 
                break;
            case 's':   
            snare.play();  
            snare.currentTime =0; 
                break;
            case 'd':   
            tom1.play();  
            tom1.currentTime =0; 
                break;
            case 'j':   
            tom2.play();  
            tom2.currentTime =0; 
                break;
            case 'k':   
            tom3.play();  
            tom3.currentTime =0; 
                break;
            case 'l':   
            tom4.play();  
            tom4.currentTime =0; 
                break;
            default:
                console.log(tecla);
                break;
    }
}

function ButtonAnimation(currentKey){
    let activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed'); 
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200);
}










