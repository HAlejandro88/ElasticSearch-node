const {Client} = require('@elastic/elasticsearch')

// Configurar el cliente de elasticsearch
const client = new Client({node: 'http://localhost:9200'})


// Funcion para crear un indice en Elasticsearch

const createIndex = async () => {
    try {
        const response  =  await client.indices.create({
            index: 'muindex'
        })

        console.log('Indice creado', response);
    } catch (error) {
        console.error('Error al crear indice', error);
    }
}


// Función para insertar un documento en Elasticsearch
const insertDocument = async () => {
    try {
        const response = await client.index({
            index: 'myindex',
            body: {
              title: 'Ejemplo de documento',
              content: 'Este es un ejemplo de documento en Elasticsearch',
            }, 
        })
        console.log('Documento insertado:', response);
    } catch (error) {
        console.error('Error al insertar el documento:', error);
    }
}

createIndex();
insertDocument();