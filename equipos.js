/*try {
    

    //const respuesta=await fetch(url);

    if (!equipos.ok) {
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`
    }

    

} catch (error) {
    console.log(error);
}*/

/*async function loadData() {
    try {
        const jsonUrl = 'ficheros/teams.json';
        const response = await fetch(jsonUrl);

        if (!response.ok) {
            throw `Error con el JSON: ${response.status}`;
        }

        const equipos = await response.json();

        console.log(equipos);


    } catch (error) {
        console.error(error);
    }
}


loadData();*/

fetch('ficheros/teams.json')
    .then(response => {
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        return response.json();
    })
    .then(myData => {
        console.log(myData);
    })
    .catch(err => console.error(err));
