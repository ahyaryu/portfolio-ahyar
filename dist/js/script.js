//navbar fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//hamberger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function(){
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
})

//klik di luar
window.addEventListener('click',function(e){
    if(e.target != hamberger && e.target !=navMenu){
    hamberger.classList.remove('hamberger-active');
    navMenu.classList.add('hidden');
    }
});