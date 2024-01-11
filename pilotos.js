document.addEventListener('DOMContentLoaded', async () => {
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

    // Obtén el contenedor de cartas
    const cartasContainer = document.getElementById('cartasContainer');

    console.log(data);

    data.forEach(carta => {
      // Crea elementos Bootstrap
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-4');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      const cardImg = document.createElement('img');
      cardImg.classList.add('card-img-top');
      cardImg.src = carta.driver.image;
      cardImg.alt = carta.driver.name;

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.innerHTML = ` ${carta.driver.name}`;

      const listGroupUl = document.createElement('ul');
      listGroupUl.classList.add('list-group', 'list-group-flush');

      const listGroupItems = ['equipo', 'posicion', 'puntos', 'victorias'];
      listGroupItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `<strong>${item.charAt(0).toUpperCase() + item.slice(1)}</strong>: ${carta[item]}`;
        listGroupUl.appendChild(li);
      });

      // Construye la estructura de la carta
      cardBodyDiv.appendChild(cardTitle);
      cardDiv.appendChild(cardImg);
      cardDiv.appendChild(cardBodyDiv);
      cardDiv.appendChild(listGroupUl);
      colDiv.appendChild(cardDiv);

      // Agrega la columna al contenedor
      cartasContainer.appendChild(colDiv);
    });

  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
  }
})

// Llama a la función asincrónica
loadData();
