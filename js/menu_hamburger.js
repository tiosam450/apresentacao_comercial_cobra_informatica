export default function menuHamburger(){

const menuHamburger = document.querySelector('#checkbox-menu');
const iconeMenu = document.querySelectorAll('* span');
const menuPrincipal = document.querySelector('header');
const itensMenu  = document.querySelectorAll('.menu li a')

function menuMobile(){
    menuPrincipal.classList.toggle('onOff');
    menuPrincipal.classList.toggle('headerAnimeEntrada');
    
    if(menuHamburger.checked == false){
        menuPrincipal.classList.add('headerAnimeSaida');
    }else{
        menuPrincipal.classList.remove('headerAnimeSaida');
    }
}

function fechaMenuMobile(){
    menuPrincipal.classList.add('headerAnimeSaida');
    menuPrincipal.classList.remove('onOff');
    menuPrincipal.classList.remove('headerAnimeEntrada');
    menuHamburger.checked = false;
}

menuHamburger.addEventListener('click', menuMobile);
itensMenu.forEach((item)=>{
    item.addEventListener('click', fechaMenuMobile)
})

}