//Go Full Screen Functionality
var elem  = document.documentElement;
var nav = document.getElementById('navbar');
var svgA = document.getElementById('svg-area');
var fulbut = document.getElementById('mob-fullscreen');
var exbut = document.getElementById("mob-exit");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  elem.style.transform='rotate(90deg)';
  nav.style.display='none';
  svgA.style.transform='scale(0.80)';
  fulbut.style.display='none';
  exbut.style.margin='-5px 0 0 25px';
  exbut.style.display='block';
}
function closeFullscreen(){
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  elem.style.transform='rotate(360deg)';
  nav.style.display='flex';
  svgA.style.transform='scale(1);'
  fulbut.style.display='block';
  exbut.style.display='none';
}
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})
//Strings
estring = document.getElementById('e-string');
bstring = document.getElementById('b-string');
gstring = document.getElementById('g-string');
dstring = document.getElementById('d-string');
astring = document.getElementById('a-string');
Estring = document.getElementById('E-string');
//strings
//-------------------------------------------------------
//animation
// shakeStringFunc: function(t) {
//   var e, s = this.$refs.string_f, i = this.$refs.string_h, o = this.$refs.string_g, n = this.$refs.string_d, r = this.$refs.string_a, a = this.$refs.string_e, c = t.slice(0, 1), l = S()(t.slice(1) - 1 + .5);
//   switch (e = l > 5 ? 1.5 : 1,
//   c) {
//   case "f":
//       this.strings.f.flexGrowLeft = l,
//       this.strings.f.flexGrowRight = 14 - l,
//       TweenLite.fromTo(s, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break;
//   case "h":
//       this.strings.h.flexGrowLeft = l,
//       this.strings.h.flexGrowRight = 14 - l,
//       TweenLite.fromTo(i, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break;
//   case "g":
//       this.strings.g.flexGrowLeft = l,
//       this.strings.g.flexGrowRight = 14 - l,
//       TweenLite.fromTo(o, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break;
//   case "d":
//       this.strings.d.flexGrowLeft = l,
//       this.strings.d.flexGrowRight = 14 - l,
//       TweenLite.fromTo(n, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break;
//   case "a":
//       this.strings.a.flexGrowLeft = l,
//       this.strings.a.flexGrowRight = 14 - l,
//       TweenLite.fromTo(r, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break;
//   case "e":
//       this.strings.e.flexGrowLeft = l,
//       this.strings.e.flexGrowRight = 14 - l,
//       TweenLite.fromTo(a, 4, {
//           rotation: e
//       }, {
//           rotation: 0,
//           ease: Elastic.easeOut.config(e, .02)
//       });
//       break
//   }
// }
// }
// })
// var leftTomtl = new TimelineMax({
// 	paused: true
// });
// leftTomtl.to(leftTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
// .to(leftTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
// .to(leftTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
// .to(leftTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
// .to(leftTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');

// function pluckStrings() {
  
  
// var guitarTl = new TimelineMax({paused:false, yoyo:false,});
// guitarTl.to(stringStraight[i], 0.5, {
//  ease: Elastic.easeIn.config(2,0.2),
//  morphSVG:{
//    d:stringPlucked[i].getAttribute('d')  
//  }
// })

// .to(stringStraight[i], 0.5, {
//  ease: Elastic.easeOut.config(2,0.2),
//  morphSVG:{
//    d:stringStraight[i].getAttribute('d')  
//  },
 
 
// })

// }
// estring.addEventListener("click", pluckStrings);
