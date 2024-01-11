document.addEventListener("DOMContentLoaded", async () => {
    try {
        const jsonFilePath = 'ficheros/teams.json';
        const response = await fetch(jsonFilePath);

        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON. Código de estado: ${response.status}`);
        }

        const data = await response.json();

        const cartasContainer = document.getElementById("containerCartas");

        // Nueva fila
        let currentRow;

        data.forEach((carta, index) => {
            
            if (index % 3 === 0) {
                currentRow = document.createElement('div');
                currentRow.classList.add('row');
                cartasContainer.appendChild(currentRow);
            }

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

            const listGroupUl = document.createElement('ul');
            listGroupUl.classList.add('list-group', 'list-group-flush');

            const listGroupItems = ['puntos', 'posicion'];
            listGroupItems.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `<strong>${item.charAt(0).toUpperCase() + item.slice(1)}</strong>: ${item === 'posicion' ? carta.position : item === 'nombre' ? carta.team.name : item === 'puntos' ? carta.points : carta.team[item] || "N/A"}`;
                listGroupUl.appendChild(li);
            });

            cardBodyDiv.appendChild(cardTitle);
            cardDiv.appendChild(cardImg);
            cardDiv.appendChild(cardBodyDiv);
            cardDiv.appendChild(listGroupUl);
            colDiv.appendChild(cardDiv);

            
            currentRow.appendChild(colDiv);
        });
    } catch (error) {
        console.error(error);
    }
});
