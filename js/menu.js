
const menuItem = document.querySelector('.menuItem');
const menuNav = document.querySelector('.menu-navegacion');



// console.log(menuItem);
// console.log(menuNav);


menuItem.addEventListener('click',()=>{
    // Con cada click al menu le agrego o le saco la clase spread a Menu-navegacion
    menuNav.classList.toggle('spread');
})

window.addEventListener('click',(e)=>{
    if(menuNav.classList.contains('spread')&& e.target!=menuNav && e.target !=menuItem){
        menuNav.classList.toggle('spread');
    }
})
