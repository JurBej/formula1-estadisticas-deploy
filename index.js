

async function loadData() {
    try {
      // Ruta al archivo JSON
      const jsonFilePath = 'ficheros/ranking.json';
  
      // Lee el contenido del archivo JSON de forma asíncrona
      const response = await fetch(jsonFilePath);
  
      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }
  
      // Convierte el contenido del archivo JSON a un objeto JavaScript
      const data = await response.json();
  
      console.log(data);
  
      data.forEach(element => {
          if(element.position==1){
            let nombrePiloto=document.getElementById('nombrePiloto');
            nombrePiloto.innerHTML=element.driver.name;
            let imagenPiloto=document.getElementById('imgPiloto');
            imagenPiloto.src=element.driver.image;
            let puntosPiloto=document.getElementById('puntosPiloto');
            puntosPiloto.innerHTML='Puntos: '+element.points;
          }
      });
  
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  }

  loadData()





/* fetch(pilotos)
    .then(respuesta =>{
        if(!respuesta.ok){
            throw new Error(`Error al cargar el archivo JSON. Codigo ${respuesta.status}`)
        }

        return respuesta.json();
    })
    .then(data=>{

        let nombrePiloto=document.getElementById('nombrePiloto');
        nombrePiloto.innerHTML=data.driver.name
    })

    .catch(error=>{
        console.log('Error al cargar el archivo JSON',error)
    }) */

/* try{
    

    /* const respuesta=await fetch(`URL`); */
    /* if(!pilotos.ok){
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`
    } */

    
/* }catch(err){
    console.log(err);
} */ 


