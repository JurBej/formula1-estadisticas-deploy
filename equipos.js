/*try {
    

    //const respuesta=await fetch(url);

    if (!equipos.ok) {
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`
    }

    

} catch (error) {
    console.log(error);
}*/
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const jsonFilePath = 'ficheros/teams.json';
  
      
      const response = await fetch(jsonFilePath);
  
      
      if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
      }
      
      const data = await response.json();
  
      console.log(data);

      const cartasContainer = document.getElementById("containerCartas")

      data.forEach(team => {
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

        const listGroupItems = ['nombre', 'presidente', 'World Champions'];
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
        console.error(error);
    }
})

/*fetch('ficheros/teams.json')
    .then(response => {
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        return response.json();
    })
    .then(myData => {
        console.log(myData);
    })
    .catch(err => console.error(err));*/
