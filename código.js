// Función para comprar verificando si el usuario ya está registrado
function requiereLogin() {
    // 1. Le preguntamos a la memoria del navegador si hay un usuario guardado
    var usuario = localStorage.getItem("usuarioGuardado");

    // 2. Armamos un condicional (if) muy simple
    if (usuario != null) {
        // Si el usuario existe (es distinto de null), lo dejamos comprar
        alert("¡Gracias por tu compra, " + usuario + "! Te enviamos los detalles del pago a tu email.");
    } else {
        // Si no hay usuario guardado, mostramos el mensaje original pidiendo que se registre
        alert("¡Hola! Para comprar esta prenda necesitás iniciar sesión o registrarte en La Tiendita primero.");
        
        // Opcional: Podés agregar esta línea para que lo mande automáticamente a la pantalla de login
        window.location.href = "login.html";
    }
}

// Función para registrar e ingresar al mismo tiempo
function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var email = document.getElementById("email").value;

    // Para comprobar que no hayan dejado todo en blanco
    if (usuario == "" || clave == "" || email == "") {
        alert("Por favor, completá todos los datos para poder ingresar a La Tiendita.");
    } else {
        // Guardamos el usuario en la memoria del navegador
        localStorage.setItem("usuarioGuardado", usuario);
        
        // Le damos la bienvenida y lo mandamos al catálogo
        alert("¡Registro exitoso! Bienvenid@ a La Tiendita, " + usuario + ".");
        window.location.href="index.html";
    }
}

// Función para vaciar los campos
function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("email").value = "";
}

// Función para simular la publicación de una prenda a la venta
function publicarPrenda() {
    // Agarrar los valores que ingresó el usuario
    var nombre = document.getElementById("nombre-prenda").value;
    var precio = document.getElementById("precio-prenda").value;
    var foto = document.getElementById("foto-prenda").value;

    if (nombre == "" || precio == "" || foto == "") {
        alert("Por favor, completá todos los datos y subí una foto para publicar tu prenda.");
    } else {
        // Mensaje de éxito y vuelta al catálogo
        alert("¡Excelente! Tu prenda '" + nombre + "' fue cargada con éxito. Pronto la validaremos para el catálogo.");
        window.location.href = "index.html";
    }
}