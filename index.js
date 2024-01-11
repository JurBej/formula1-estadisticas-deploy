

async function loadData() {
    try {
      // Ruta al archivo JSON
      const jsonFilePath = 'ficheros/ranking.json';
      const jsonFilePath2= 'ficheros/teams.json';
  
      // Lee el contenido del archivo JSON de forma asíncrona
      const response = await fetch(jsonFilePath);
      const response2 = await fetch(jsonFilePath2);
  
      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }

      if (!response2.ok) {
        throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response2.status}`);
    }
  
      // Convierte el contenido del archivo JSON a un objeto JavaScript
      const data = await response.json();
      const dataEquipos = await response2.json();
  
  
      data.forEach(element => {
          if(element.position==1){
            let nombrePiloto=document.getElementById('nombrePiloto');
            nombrePiloto.innerHTML=element.driver.name;
            let imagenPiloto=document.getElementById('imgPiloto');
            imagenPiloto.src=element.driver.image;
            let puntosPiloto=document.getElementById('puntosPiloto');
            puntosPiloto.innerHTML='Puntos: '+element.points;
          }

          if(element.position==2){
            let nombrePiloto2=document.getElementById('nombrePiloto2');
            nombrePiloto2.innerHTML=element.driver.name;
            let imagenPiloto2=document.getElementById('imgPiloto2');
            imagenPiloto2.src=element.driver.image;
            let puntosPiloto2=document.getElementById('puntosPiloto2');
            puntosPiloto2.innerHTML='Puntos: '+element.points;
          }

          if(element.position==3){
            let nombrePiloto3=document.getElementById('nombrePiloto3');
            nombrePiloto3.innerHTML=element.driver.name;
            let imagenPiloto3=document.getElementById('imgPiloto3');
            imagenPiloto3.src=element.driver.image;
            let puntosPiloto3=document.getElementById('puntosPiloto3');
            puntosPiloto3.innerHTML='Puntos: '+element.points;
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


