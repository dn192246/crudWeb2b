//URL DE LA API - ENDPOINT

const API_URL = "https://retoolapi.dev/FMwk75/Expo";

//Funcion para llamr a la API y traer el JSON
async function ObtenerPersonas() {
    //obtenemos la respuesta del servidor
    const res = await fetch(API_URL)
    //cONVERTIR LA RESPUESTA DEL SERVIDOR A FORMATO JSON

    const data = await res.json();

    CrearTabla(data);//Enviamos el JSON  a la funicon creartabla
}

//Funcion que creara las filas de la tabla en base a los registros que vienen de la API
function CrearTabla(datos){//Datos representa al JSON que viene de la API

    //Se llama "tbody" dentro de la tabla con id "tabla"
    const tabla = document.querySelector("#tabla tbody");

    //Para inyectar codigo HTML usamos "innerHTML"
    tabla.innerHTML = "";//Vaciamos el contenido de la tabla

    datos.forEach( persona => {
        tabla.innerHTML += `
         <tr>
            <td>${persona.id}</td>
             <td>${persona.nombre}</td>
             <td>${persona.apellido}</td>
             <td>${persona.edad}</td>
            <td>${persona.correo}</td>
            <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                 </td>
         </tr>
        
        `
    });

}
ObtenerPersonas();

