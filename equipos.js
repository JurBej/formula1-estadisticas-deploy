document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Ruta al archivo JSON
      const jsonFilePath = 'ficheros/teams.json';
  
      // Lee el contenido del archivo JSON de forma asíncrona
      const response = await fetch(jsonFilePath);
  
      // Verifica si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }
  
      // Convierte el contenido del archivo JSON a un objeto JavaScript
      const data = await response.json();
  
      // Obtén el contenedor de cartas
      const cartasContainer = document.getElementById('cartasContainer');
  
      // Inicializa la variable para la fila actual
      let rowDiv;
  
      // Función para crear las cartas
      const createCard = (carta) => {
        // Crea elementos Bootstrap
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');
  
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
  
        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = carta.team.logo;
        cardImg.alt = carta.team.name;
  
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
  
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = ` ${carta.team.name}`;

        if(carta.team.name=="Scuderia Ferrari"){
            cardImg.classList.add('ferrari');
        }
  
        const listGroupUl = document.createElement('ul');
        listGroupUl.classList.add('list-group', 'list-group-flush');
  
        listGroupUl.innerHTML = `
          <li class="list-group-item"><strong>Equipo</strong>: ${carta.team.name}</li>
          <li class="list-group-item"><strong>Posición</strong>: ${carta.position}</li>
          <li class="list-group-item"><strong>Puntos</strong>: ${carta.points}</li>
          <li class="list-group-item"><strong>Temporada</strong>: ${carta.season}</li>`;
  
        // Construye la estructura de la carta
        cardBodyDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(listGroupUl);
        colDiv.appendChild(cardDiv);
  
        // Agrega la columna a la fila actual
        rowDiv.appendChild(colDiv);
      };
  
      // Función para construir todas las cartas
      const buildAllCards = (dataArray) => {
        dataArray.forEach((carta, index) => {
          // Crea una nueva fila cada vez que se completa una fila de tres cartas
          if (index % 3 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
          }
  
          // Crea la carta
          createCard(carta);
  
          // Agrega la fila al contenedor de cartas cuando se completa
          if ((index + 1) % 3 === 0 || index === dataArray.length - 1) {
            cartasContainer.appendChild(rowDiv);
          }
        });
      };
  
      // Construye todas las cartas al cargar la página
      buildAllCards(data);
  
      // Obtén el campo de búsqueda
      const searchBar = document.querySelector('input[type="search"]');
  
      // Agrega un evento de escucha al campo de búsqueda
      searchBar.addEventListener('input', () => {
        // Filtra los pilotos según el valor del campo de búsqueda
        const filtro = searchBar.value.toLowerCase();
        const pilotosFiltrados = data.filter(carta => carta.team.name.toLowerCase().includes(filtro));
  
        // Limpia el contenedor de cartas
        cartasContainer.innerHTML = '';
  
        // Construye las cartas filtradas
        buildAllCards(pilotosFiltrados);
      });
  
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
    }
  });
  