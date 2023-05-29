(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuCloseItemMain = document.querySelector('.main');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
    menuCloseItemMain.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
}());

/* Pop Up */

let button = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let account = document.getElementById('account');
let up = document.getElementById('up');
let register = document.getElementById('register');
let login = document.getElementById('login');


button.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'block';
});

close.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'none';
});

account.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'block';
});

register.addEventListener('click', function(event){
    event.preventDefault();
    up.style.display = 'block';
});

register.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'none';
});

close.addEventListener('click', function(event){
    event.preventDefault();
    up.style.display = 'none';
});

login.addEventListener('click', function(event){
    event.preventDefault();
    up.style.display = 'none';
});

login.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'block';
});

/* Слайдер в боке Intro */

const slides = document.querySelectorAll(".slide");
for( const slide of slides){
    slide.addEventListener("click", () => {
        clearActiveClasses()
        slide.classList.add("active")
    })
}
function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}


sn.onclick = start;
function start(){
    let input = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    alert('Login: ' + input);
    alert('Password: ' + password);
}

su.onclick = starts;
function starts(){
    let inputu = document.getElementById('emailu').value;
    let passwordu = document.getElementById('passwordu').value;
    alert('Login: ' + inputu);
    alert('Password: ' + passwordu);
}
