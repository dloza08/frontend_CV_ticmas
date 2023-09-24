//console.log("connection ok");


const randomUsers = async () => {
const response = await fetch("https://randomuser.me/api/?format=JSON _");
const user= await response.json();
//console.log(user);

user["results"][0]["gender"];
    
const nombre = user["results"][0]["name"].first;
const apellido = user["results"][0]["name"].last;
const imagen = user["results"][0]["picture"].large;
const age = user["results"][0]["dob"].age;
const country = user["results"][0]["location"]["country"];
const city = user["results"][0]["location"]["city"];
const state = user["results"][0]["location"]["state"];
const email = user["results"][0]["email"];
const telefono = user["results"][0]["phone"];
const cell = user["results"][0]["cell"];
    
//nombre y apellido en foto
    
var nombreCompleto = nombre+" "+apellido;
//console.log(nombreCompleto);
document.getElementById("nomApe").innerHTML += nombreCompleto;
    
//carga de datos
    
document.getElementById("nom").innerHTML += nombre;
document.getElementById("ape").innerHTML += apellido;
document.getElementById("age").innerHTML += age;
document.getElementById("country").innerHTML += country;
document.getElementById("city").innerHTML += city;
document.getElementById("state").innerHTML += state;
document.getElementById("email").innerHTML += email;
document.getElementById("telefono").innerHTML += telefono;
document.getElementById("cell").innerHTML += cell;
    
var img = document.createElement('img');
img.src = imagen;
    
var foto = document.querySelector('#imagen');
foto.appendChild(img);

/*funcion para boton volver*/
    
const btnVolver = document.querySelector('button');

btnVolver.addEventListener("click", function(){
   document.location.href = "#boton-volver";
})
    
}
window.addEventListener("load" , function () {
        randomUsers();
});

/*boton modo oscuro*/

// Obtener el botón de modo oscuro y el cuerpo de la página
/*
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Agregar un evento click al botón de modo oscuro
darkModeToggle.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el cuerpo de la página
    body.classList.toggle('dark-mode');
});

// Obtener el botón por su ID
const miBoton = document.getElementById('dark-mode-toggle');

// Agregar un evento de clic al botón
miBoton.addEventListener('click', function() {
    // Verificar el texto actual del botón
    if (miBoton.textContent === 'Modo oscuro') {
        // Cambiar el texto del botón cuando se hace clic
        miBoton.textContent = 'Modo claro';
    } else {
        // Cambiar el texto de vuelta al estado original
        miBoton.textContent = 'Modo oscuro';
    }
});*/