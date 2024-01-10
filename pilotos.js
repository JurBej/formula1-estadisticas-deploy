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
        
    });

  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
  }
}

// Llama a la función asincrónica
loadData();
