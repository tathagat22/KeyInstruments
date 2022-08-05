// navbar button
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})
// bigtabla
bigtabla = document.getElementById('Bigt');
label = document.getElementById('Group');
bigblack = document.getElementById('Ellipse_4');
biglight = document.getElementById('Ellipse_3');
bigdark = document.getElementById('Ellipse_1');
bigblack_audio = document.getElementById('bigblack_audio');
biglight_audio = document.getElementById('biglight_audio');
bigdark_audio = document.getElementById('bigdark_audio');
// smalltabla
smalltabla = document.getElementById('Smallt');
smallblack = document.getElementById('Ellipse_6');
smalllight = document.getElementById('Ellipse_5');
smalldark = document.getElementById('Ellipse_2');
smallblack_audio = document.getElementById('smallblack_audio');
smalllight_audio = document.getElementById('smalllight_audio');
smalldark_audio = document.getElementById('smalldark_audio');
 // Big Tabla Animation
var bigTl = new TimelineMax({
	paused: true
});
bigTl.to(bigtabla, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(bigtabla, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});
///Small Tabla Animation
var smallTl = new TimelineMax({
	paused: true
});
smallTl.to(smalltabla, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(smalltabla, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});
//left tabla syahi or gab or big black part
function playBsyahiaudio() {
    bigblack_audio.currentTime = 0;
    bigblack_audio.play();
}
function Bsyahi(){
    bigTl.restart();
    bigTl.play();
    playBsyahiaudio();
}
bigblack.addEventListener('click', Bsyahi);

//left tabla maidan or sur or big light part
function playBmaidanaudio() {
    biglight_audio.currentTime = 0;
    biglight_audio.play();
}
function Bmaidan(){
    bigTl.restart();
    bigTl.play();
    playBmaidanaudio();
}
biglight.addEventListener('click', Bmaidan);
// left tabla kinar or chanti or big dark part
function playBkinaraudio() {
    bigdark_audio.currentTime = 0;
    bigdark_audio.play();
}
function Bkinar(){
    bigTl.restart();
    bigTl.play();
    playBkinaraudio();
}
bigdark.addEventListener('click', Bkinar);
// right tabla syahi or gab or small black part
function playSsyahiaudio() {
    smallblack_audio.currentTime = 0;
    smallblack_audio.play();
}
function Ssyahi(){
    smallTl.restart();
    smallTl.play();
    playSsyahiaudio();
}
smallblack.addEventListener('click', Ssyahi);
// right tabla maidan or sur or big light part
function playSmaidanaudio() {
    smalllight_audio.currentTime = 0;
    smalllight_audio.play();
}
function Smaidan(){
    smallTl.restart();
    smallTl.play();
    playSmaidanaudio();
}
smalllight.addEventListener('click', Smaidan);
//right tabla kinar or chanti or small dark part
function playSkinaraudio() {
    smalldark_audio.currentTime = 0;
    smalldark_audio.play();
}
function Skinar(){
    smallTl.restart();
    smallTl.play();
    playSkinaraudio();
}
smalldark.addEventListener('click', Skinar);

//keyboard

document.onkeydown = function(event) {
    switch (event.keyCode){
      case 68:
        Bsyahi();
        break;
      case 83:
        Bmaidan();
        break;
      case 65:
        Bkinar();
        break;
      case 74:
        Ssyahi();
        break;
      case 75:
        Smaidan();
        break;
      case 76:
        Skinar();
        break;        
    }
  };
  