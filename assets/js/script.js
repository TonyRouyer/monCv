
//smooth scroll sur les lien
document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//cache le button up si scroll < 50
var myButton = document.getElementById('myBtn');
    topPage = document.getElementById('top');
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
window.onscroll = function () { scrollFunction() };
//fonction pour retourner en haut de la page
function topFunction() {
    document.getElementById('top').scrollIntoView({
        behavior: 'smooth',
    });
};


var tw = 0;
var twh2 = 'Tony Rouyer';
var speed = 80;
function textPresentation1() {
    if (tw < twh2.length) {
        document.getElementById("textPresentation1").innerHTML += twh2.charAt(tw);
        tw++;
        setTimeout(textPresentation1, speed);
    }
}

var i = 0;
var txt = 'Developpeur web - Web mobile';
var speed = 80;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
