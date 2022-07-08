
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const closeLight = document.querySelector('.close');

const menuItem2 = document.querySelector('.menuItem');


imagenes.forEach(imagen=> {
    imagen.addEventListener('click',()=> {
        let locationImg = imagen.getAttribute('src');
        aparecerImagen(locationImg);
    })
});

const aparecerImagen = (imagenLocation)=>{
    imagenesLight.src=imagenLocation;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    menuItem2.style.opacity=0;
}



contenedorLight.addEventListener('click',(e)=>{
    // if(e.target==contenedorLight ){
    //     console.log('Estás haciendo click en contenedorLight');
    // }else if(e.target==closeLight){
    //     console.log('Estás haciendo click en closeLight');
    // }

    if(e.target==contenedorLight || e.target==closeLight){
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImage');
        menuItem2.style.opacity=1;
    }
})

// Cerrar el lightBox
// closeLight.addEventListener('click',()=>{
//     contenedorLight.classList.remove('show');
//     imagenesLight.classList.remove('showImage');
// })