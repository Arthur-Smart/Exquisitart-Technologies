
document.addEventListener('DOMContentLoaded', () =>{
var typed = new Typed(".element",{
    strings: ["Javascript", "HTML", "CSS", "Bootstrap"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    smartDelay:1000
});

window.addEventListener('load', () =>{
      AOS.init();
});

//Skill
 var progressBar = document.querySelectorAll('.progress-bar');
progressBar[0].setAttribute('style', 'width:100%; transition:1s all;');
progressBar[1].setAttribute('style', 'width:95%; transition:1.5s all;');
progressBar[2].setAttribute('style', 'width:77%; transition:1.7s all;');
progressBar[3].setAttribute('style', 'width:85%; transition:2s all;');
progressBar[4].setAttribute('style', 'width:90%; transition:2.3s all;');
progressBar[5].setAttribute('style', 'width:70%; transition:2.5s all;');
});
