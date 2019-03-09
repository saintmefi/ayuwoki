let saludo = document.getElementById ('saludo');
let boton = document.getElementById ('boton');
let input = document.getElementById ('input');
let imagen = document.getElementById('imagen')
let boton2 = document.getElementById('boton2')
let mostrar = document.getElementById ('mostrar');
let contenedor = document.getElementById('container');
const cambiar = () => {
    saludo.innerHTML = '¡AYUWOKI!' 
    imagen.className = 'aparecer';
    contenedor.style.visibility = 'visible';
    saludo.style.marginTop= '1em';

}

// boton.addEventListener('click', cambiar);

const nombre =() =>{

    let textoinput = input.value;
    if (textoinput.toUpperCase() === 'YA NO QUIERO VER AL AYUWOKI'){
        imagen.className = ''
        contenedor.style.visibility ='hidden';
        input.value = '';
    }else{
        imagen.className = 'aparecer';
        imagen.src = 'ayuwokicopia.jpg'
    }
    
    
}

boton.addEventListener('click' , cambiar);
boton2.addEventListener('click' , nombre);