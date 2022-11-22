//imagenes 
let imagenes = ['../img/img1.jpg','../img/img2.jpg','../img/img3.jpg','../img/img4.jpg','../img/img5.jpg']; //[img0 , img 1 , img2 , img3 , img4]
//controla que imagen vamos a ver 
let contador = 0; 

//funcion que recibe el contenedor y devuelve respuesta adelante o atras
function carrousel(direccion){
let direccion1 = direccion;

//funcion atras
if(direccion1=='atras'){

    //si el contador no es cero retrocede
  if(contador > 0){
    document.getElementById('imagen').src= imagenes[contador-1]; //se obtiene el id y la imagen correspondiente sera la ultima
    contador--; 
    //si el contador es menor a todas las imagenes (img intermedia) 
  }else { //esta en la primera imagen y vuelve a la ultima 
    document.getElementById('imagen').src= imagenes[imagenes.length-1]; //se devuelve una casilla el indice 
    contador= imagenes.length - 1; //contador en la ultima imagen 
  }
}

if(direccion1=='adelante'){ //hacia adelante
  if(contador < imagenes.length-1){ //si el contador es diferente a cero 
    document.getElementById('imagen').src= imagenes[contador+1];
    contador++; //se aumenta el contador a la img correspondiente
  }
  else {
    document.getElementById('imagen').src= imagenes[0]; //se devuelve a la imagen 0 
    contador=0; //contador se reinicia 
  }
}
}