window.onload = init;
function init(){

    
    let ayuda=0;
    let imagen = document.getElementsByClassName("contenedor");
    let descripcion = document.getElementsByClassName("desc");
    let titulo = document.getElementsByClassName("titulo");
  
    if (window.XMLHttpRequest)
    {
        // Objeto para IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{
        // Objeto para IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
   
      // Abrimos el archivo
      xmlhttp.open("GET","Galeria.json",true);
      xmlhttp.send();
  //console.log("hola");
      xmlhttp.onload = function(){
        const jsonDoc = JSON.parse(xmlhttp.responseText);
        const imagenes = jsonDoc.galeria.imagen;
        tit=imagenes[ayuda].titulo;
        desc=imagenes[ayuda].descripcion;
        url=imagenes[ayuda].url;
  
        imagen[0].setAttribute("src", url);
        document.getElementsByClassName('desc')[0].innerHTML = desc; 
        document.getElementsByClassName('titulo')[0].innerHTML = tit; 
        
        let button = document.querySelector('#button');
        button.addEventListener('mouseup', (e) => {
         let log = document.querySelector('#log');
         switch (e.button) {
        case 0:
            if(ayuda < imagenes.length-1 && ayuda >=0){
              ayuda=ayuda+1;
              tit=imagenes[ayuda].titulo;
              desc=imagenes[ayuda].descripcion;
              url=imagenes[ayuda].url;
    
              imagen[0].setAttribute("src", url);
              document.getElementsByClassName('desc')[0].innerHTML = desc; 
              document.getElementsByClassName('titulo')[0].innerHTML = tit; 
              }
            break;
          case 2:
              
              if(ayuda>0 && ayuda < imagenes.length ){
              ayuda=ayuda-1;
              
              url=imagenes[ayuda].url;
  
              imagen[0].setAttribute("src", url);
              descripcion[0].setAttribute("src",desc);
              titulo[0].setAttribute("src",tit);
              }
            break;
          default:
            log.textContent = `Unknown button code: ${e.button}`;
          }
          });
        
      }
  
      
  } 