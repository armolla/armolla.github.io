const bars = document.querySelector('.buttonBars');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.linkMenu');
const logo = document.querySelector('.logo');

bars.addEventListener('click', ()=>{
    
    if (menu.style.left !== '0%') {
        menu.style.left = '0%';
    } else {
        menu.style.left = '-100%';
    }

    document.querySelector('.topBar').classList.toggle('activeTopBar');
    document.querySelector('.middleBar').classList.toggle('activeMiddleBar');
    document.querySelector('.bottomBar').classList.toggle('activeBottomBar');
});

links.forEach((value) => {
    value.addEventListener('click', ()=>{
        menu.style.left = '-100%';
    });
});

logo.addEventListener('click', ()=>{
    if (menu.style.left !== '-100%') {
        menu.style.left = '-100%'
    }
});