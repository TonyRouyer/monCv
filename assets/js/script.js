
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
