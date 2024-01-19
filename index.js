async function loadData() {
  try {
      const jsonFilePath = 'ficheros/ranking.json';
      const jsonFilePath2 = 'ficheros/teams.json';

      // Obtener datos de los pilotos
      const response = await fetch(jsonFilePath);
      const response2 = await fetch(jsonFilePath2);

      if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }

      if (!response2.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response2.status}`);
      }

      // Convertir los datos JSON en objetos JavaScript
      const data = await response.json();
      const dataEquipos = await response2.json();

      // Actualizar la información de los pilotos en la interfaz
      updateDriverInfo(data, 1, 'nombrePiloto', 'imgPiloto', 'puntosPiloto');
      updateDriverInfo(data, 2, 'nombrePiloto2', 'imgPiloto2', 'puntosPiloto2');
      updateDriverInfo(data, 3, 'nombrePiloto3', 'imgPiloto3', 'puntosPiloto3');

      // Actualizar la información de los equipos en la interfaz
      updateTeamInfo(dataEquipos, 1, 'nombreEquipo1', 'imgEquipo1', 'puntosEquipo1');
      updateTeamInfo(dataEquipos, 2, 'nombreEquipo2', 'imgEquipo2', 'puntosEquipo2');
      updateTeamInfo(dataEquipos, 3, 'nombreEquipo3', 'imgEquipo3', 'puntosEquipo3');

  } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
  }
}

// Función para actualizar la información de los pilotos en la interfaz
const updateDriverInfo = (data, position, nombreId, imagenId, puntosId) => {
  const elemento = data.find(element => element.position === position);

  if (elemento) {
      let nombre = document.getElementById(nombreId);
      let imagen = document.getElementById(imagenId);
      let puntos = document.getElementById(puntosId);

      // Actualizar elementos HTML con la información del piloto
      nombre.innerHTML = elemento.driver.name;
      imagen.src = elemento.driver.image;
      puntos.innerHTML = 'Puntos: ' + elemento.points;
  }
}

// Función para actualizar la información de los equipos en la interfaz
const updateTeamInfo = (dataEquipos, posicion, nombreId, imagenId, puntosId) => {
  const elemento = dataEquipos.find(element => element.position === posicion);

  if (elemento) {
      let nombre = document.getElementById(nombreId);
      let imagen = document.getElementById(imagenId);
      let puntos = document.getElementById(puntosId);

      // Actualizar elementos HTML con la información del equipo
      nombre.innerHTML = elemento.team.name;
      imagen.src = elemento.team.logo;
      puntos.innerHTML = 'Puntos: ' + elemento.points;
  }
}

// Llamar a la función principal para cargar los datos
loadData();
