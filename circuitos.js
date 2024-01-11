document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Ruta al archivo JSON
      const jsonFilePath = 'ficheros/circuits.json';
  
      // Lee el contenido del archivo JSON de forma asíncrona
      const response = await fetch(jsonFilePath);
  
      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }
  
      // Convierte el contenido del archivo JSON a un objeto JavaScript
      const data = await response.json();
  
      // Obtén el contenedor de circuitos
      const circuitosContainer = document.getElementById('cartasContainer');
  
      console.log(data);
  
      // Inicializa la variable para la fila actual
      let rowDiv;
  
      data.forEach((circuito, index) => {
        // Crea elementos Bootstrap
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');
  
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
  
        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = circuito.circuit.image;
        cardImg.alt = circuito.name;
  
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
  
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = ` ${circuito.circuit.name}`;
  
        const listGroupUl = document.createElement('ul');
        listGroupUl.classList.add('list-group', 'list-group-flush');
  
        listGroupUl.innerHTML = `
        <li class="list-group-item"><strong>Equipo</strong>: ${circuito.team.name}</li>
        <li class="list-group-item"><strong>Posición</strong>: ${circuito.position}</li>
        <li class="list-group-item"><strong>Puntos</strong>: ${circuito.points}</li>
        <li class="list-group-item"><strong>Temporada</strong>: ${circuito.season}</li>`;
  
        // Construye la estructura de la circuito
        cardBodyDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(listGroupUl);
        colDiv.appendChild(cardDiv);
  
         // Crea una nueva fila cada vez que se completa una fila de tres circuitos
         if (index % 3 === 0) {
          rowDiv = document.createElement('div');
          rowDiv.classList.add('row');
        }
  
        // Agrega la columna a la fila actual
        rowDiv.appendChild(colDiv);
  
        // Agrega la fila al contenedor de circuitos cuando se completa
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          circuitosContainer.appendChild(rowDiv);
        }
      });
  
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  })
  
  // Llama a la función asincrónica

  