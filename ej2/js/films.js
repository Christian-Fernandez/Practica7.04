"use strict";
//Función que hace un fetch a las peliculas de StarWars.
async function informacionPeliculas() {

    return await fetch("https://swapi.dev/api/films", {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });

}

//Función mostrar peliculas le pasa por parámetro el json y los imprime en html.
function mostrarPeliculas(objeto) {
    let cadena = "";
    cadena += "<h2>Películas: "+objeto.count+" </h2><ul>";
    //Recorre el objeto.
    objeto.results.map((v, i, a) => {

        cadena +=`<li>(${v.episode_id})<a id="${v.episode_id}" class="pelicula" href="#">${v.title}</a> </li>`;
    });
    cadena += "</ul>";
    document.getElementById("peliculas").innerHTML = cadena;
}

//Función que según la película que le pases te devuelve su cod.
function codPelicula(evento){

    switch(evento.target.id){

        case "1": return "4";
            break;
        case "2": return "5";
            break;
        case "3": return "6";
            break;
        case "4": return "1";
            break;
        case "5": return "2";
            break;
        case "6": return "3";
            break;

    }

}

//Función que le pasas por parámetro la película y la opción.
async function datosPelicula(film) {

    return await fetch("https://swapi.dev/api/films/" + film, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });

}

//Función que le pasa por parámetro el objeto Json e imprime en el html la sinopsis.
function mostrarSinopsis(objeto) {
    let cadena = "";
    cadena += "<h2>Sinopsis</h2><h3>"+objeto.title+"</h3><p>"+objeto.opening_crawl+"</p>";

    document.getElementById("sinopsis").innerHTML = cadena;
}

//Función que imprime en el html el nombre de 10 personajes que aparecen en la película.
async function informacionPersonajes(film,i) {

    let url = film.characters[i];
    return await fetch(url, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });

}

//Función que muestra la lista de los personajes.
function mostrarPersonaje(personaje,ul){

    ul.innerHTML+="<li><a href='#' class='personaje' id="+ personaje.url +">"+ personaje.name +"</a></li>";
}


//Función que al hacer clic en un personaje returna un json con la información de dicho personaje.
async function informacionPersonaje(personaje) {

    let url = personaje;
    return await fetch(url, {
        "method": "GET"
    }).then(response => {
        return response.json();

    }).catch(err => {
        console.error(err);
    });

}

//Función que imprime la información de los personajes.
function mostrarInfoPersonaje(item){
    let div=document.createElement("div");
    div.setAttribute("id","infoPersonaje");
    div.innerHTML += ``;
    div.innerHTML=`<h2>Información Personaje</h2> <table><tr><th colspan="7">Nombre: ${item.name}</th></tr><tr><th>Altura</th> <th>Peso</th> <th>Color de pelo</th> <th>Color de piel</th><th>Color de ojos</th><th>Año de nacimiento</th><th>Genero</th></tr><tr><td> ${item.height} cm</td> <td>${item.mass} kilos</td> <td>${item.hair_color}</td> <td>${item.skin_color}</td> <td>${item.eye_color}</td> <td>${item.birth_year}</td> <td>${item.gender}</td></tr></table>`;

    return div;
}

//Función que al hacer clic en un personaje returna un json con la información de las naves de dicho personaje.
async function getNave(item,i){
    let url = item.starships[i];
    return await fetch(url, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });
}

//Función que al hacer clic en un personaje returna un json con la información de las vehiculos de dicho personaje.
async function getVehiculos(item,i){
    let url = item.vehicles[i];
    return await fetch(url, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });
}

//Función que muestra la lista de las naves.
function mostrarNave(v){

    document.getElementById("nave").innerHTML+=`<li><a id=${v.url} class="nave" href="#">${v.name}</a> </li>`;

}

//Función que muestra la lista de las Vehiculos.
function mostrarVehiculos(v){

    document.getElementById("Vehiculos").innerHTML+=`<li><a id=${v.url} class="vehiculo" href="#">${v.name}</a> </li>`;

}

//Función que al hacer clic en una nave returna un json con la información de dicha nave.
async function getInfoNave(item){
    let url = item;
    return await fetch(url, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });
}

//Función que al hacer clic en un vehiculo returna un json con la información de dicho vehiculo.
async function getInfoVehiculo(item){

    let url = item;
    return await fetch(url, {
        "method": "GET"
    }).then(response => {

        return response.json();

    }).catch(err => {
        console.error(err);
    });

}

//Función que muestra una tabla con la información de la nave seleccionada.
function mostrarInfoNave(item){

    let div=document.createElement("div");
    div.setAttribute("id","infoNave");
    div.innerHTML += ``;
    div.innerHTML=`<h2>Información Nave</h2> <table><tr><th colspan="3">Nombre de la nave: ${item.name}</th></tr><tr><th colspan="3">Modelo:${item.model}</th></tr><tr><th colspan="3">Precio en Creditos:${item.cost_in_credits}</th></tr><tr><th>Velocidad</th><th>Capacidad de Carga</th><th>Clase</th></tr> <tr><td>${item.max_atmosphering_speed}</td> <td>${item.cargo_capacity}</td><td>${item.starship_class}</td></tr></table>`;

    return div;

}

//Función que muestra una tabla con la información del vehiculo seleccionado.
function mostrarInfoVehiculo(item){

    let div=document.createElement("div");
    div.setAttribute("id","infoVehiculo");
    div.innerHTML += ``;
    div.innerHTML=`<h2>Información Vehiculo</h2> <table><tr><th colspan="3">Nombre de la nave: ${item.name}</th></tr><tr><th colspan="3">Modelo:${item.model}</th></tr><tr><th colspan="3">Precio en Creditos:${item.cost_in_credits}</th></tr><tr><th>Velocidad</th><th>Capacidad de Carga</th><th>Clase</th></tr> <tr><td>${item.max_atmosphering_speed}</td> <td>${item.cargo_capacity}</td><td>${item.vehicle_class}</td></tr></table>`;

    return div;

}


export {informacionPeliculas,codPelicula,datosPelicula,informacionPersonajes,mostrarPeliculas,mostrarSinopsis,mostrarPersonaje,informacionPersonaje,mostrarInfoPersonaje,getNave,getVehiculos,mostrarNave,mostrarVehiculos,getInfoNave,getInfoVehiculo,mostrarInfoNave,mostrarInfoVehiculo};

