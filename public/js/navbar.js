const menu = document.querySelector('.menu');

function animateMenu (){
    document.querySelector('.topBar').classList.toggle('activeTopBar');
    document.querySelector('.middleBar').classList.toggle('activeMiddleBar');
    document.querySelector('.bottomBar').classList.toggle('activeBottomBar');
}

function showMenu (){
    menu.style.left = '0%';
    animateMenu();
}

function hideMenu (){
    menu.style.left = '-100%';
    animateMenu();
}

document.querySelector('.buttonBars').addEventListener('click', ()=>{
    if (menu.style.left !== '0%') {
        showMenu();
    } else {
        hideMenu();
    }
});

document.querySelectorAll('.linkMenu').forEach((value) => {
    value.addEventListener('click', ()=>{
       hideMenu();
    });
});

document.querySelector('.logo').addEventListener('click', ()=>{
    if (menu.style.left !== '-100%') {
        hideMenu();
    }  
});

window.addEventListener('resize', ()=>{
    if (screen.width >= 992 && menu.style.left !== '-100%') {
        hideMenu();
    }
})