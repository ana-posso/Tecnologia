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
    xmlhttp.open("POST", "Galeria.php", true);
    xmlhttp.send();

   
    xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status ==200) {
            
            const phpDoc = JSON.parse(xmlhttp.responseText);
            const imagenes = phpDoc;
            
            tit=imagenes[ayuda].Titulo;
            desc=imagenes[ayuda].Descripcion;
            url=imagenes[ayuda].url;
      
            imagen[0].setAttribute("src", "data:image/jpg;base64,"+url);
            document.getElementsByClassName('desc')[0].innerHTML = desc; 
            document.getElementsByClassName('titulo')[0].innerHTML = tit; 

            let button = document.querySelector('#button');
            button.addEventListener('mouseup', (e) => {
             let log = document.querySelector('#log');
             switch (e.button) {
            case 0:
                if(ayuda < imagenes.length-1 && ayuda >=0){
                  ayuda=ayuda+1;
                  tit=imagenes[ayuda].Titulo;
                  desc=imagenes[ayuda].Descripcion;
                  url=imagenes[ayuda].img;
        
                  imagen[0].setAttribute("src", "data:image/jpg;base64,"+url);
                  document.getElementsByClassName('desc')[0].innerHTML = desc; 
                  document.getElementsByClassName('titulo')[0].innerHTML = tit; 
                  }
                break;
              case 2:
                  
                  if(ayuda>0 && ayuda < imagenes.length ){
                  ayuda=ayuda-1;
                  tit=imagenes[ayuda].Titulo;
                  desc=imagenes[ayuda].Descripcion;
                  url=imagenes[ayuda].img;
      
                  imagen[0].setAttribute("src", "data:image/jpg;base64,"+url);
                  document.getElementsByClassName('desc')[0].innerHTML = desc; 
                  document.getElementsByClassName('titulo')[0].innerHTML = tit; 
                  }
                break;
              default:
                log.textContent = `Unknown button code: ${e.button}`;
              }
              });
        }	
	}
    
}