function Hamburger(){ 
    var botaoOpen = document.getElementsByClassName('icon-open')[0];
    var botaoClose = document.getElementsByClassName('icon-open')[1];
    var hamburger = document.getElementById('hamburger');


    botaoOpen.onclick = function(){
        hamburger.classList.remove('hamburger-disable');
        hamburger.classList.add('hamburger-active');
    }
    botaoClose.onclick = function(){
        hamburger.classList.remove('hamburger-active');
        hamburger.classList.add('hamburger-disable');
    }
};

window.addEventListener('load',function(){
    Hamburger();
});