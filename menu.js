let btnmenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let btnCloseMenu = document.querySelector('.btn-fechar i');
let overlay = document.getElementById('overlay');

btnmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('show');
});

btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('show');
});