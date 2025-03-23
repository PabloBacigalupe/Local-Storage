const formulario = document.getElementById("miFormulario");

// Escuchamos el evento submit
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Esto evita que la página se recargue o dé error
  const nombre = event.target.elements["nombre"].value;
  const email = event.target.elements["email"].value;
  const mensaje = event.target.elements["mensaje"].value;
  const imagen = event.target.elements["imagen"].value;

  console.log({ nombre, email, mensaje, imagen });

  alert("¡Muchas gracias!  " + nombre);

  // También podrías guardarlos en localStorage:
  const datos = {
    nombre: nombre,
    email: email,
    mensaje: mensaje,
    imagen: imagen,
  };

  localStorage.setItem("usuario", JSON.stringify(datos));

  const datosString = JSON.parse(localStorage.usuario);

  console.log("Guardado en localStorage(parseado):", datosString);
});


//1. Utilizar metodo querySelector/getElementBy
const botonBorrar = document.querySelector("#borrar");


//2. Sobre el selector llamar al metodo addEventListener y pasarle dos argumentos
//el primero el tipo de evento y el segundo una funcion que contenga el código que 
// se va a ejecutar al producirse el evento

botonBorrar.addEventListener("click", function (event) {
  console.log("click botón");

  localStorage.clear();
});


/*--*/


const botonBorrarNombre = document.querySelector("#borrar-nombre");


botonBorrarNombre.addEventListener("click", function (event) {
  console.log("click botón nombre");

  localStorage.removeItem("nombre");
});




