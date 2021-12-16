"use strict";
import {
    informacionPeliculas,
    datosPelicula,
    codPelicula,
    informacionPersonajes,
    mostrarSinopsis,
    mostrarPeliculas,
    mostrarPersonaje,
    informacionPersonaje,
    mostrarInfoPersonaje, getNave, getVehiculos, mostrarNave, mostrarVehiculos,getInfoNave,getInfoVehiculo,mostrarInfoNave,mostrarInfoVehiculo
} from "./films.js";

//Variables globales del DOM.
var peliculas = document.getElementById("peliculas");
var sinopsis = document.getElementById("sinopsis");
var personajes = document.getElementById("personajes");
var nave = document.getElementById("nave");
var vehiculo = document.getElementById("Vehiculos");
var infoPersonaje = document.getElementById("infoPersonajes");
var infoNave = document.getElementById("infoNave");
var infoVehiculo = document.getElementById("infoVehiculo");

window.onload= ()=>{

    //Ejecuta la función informacionPeliculas.

    informacionPeliculas().then(peliculas =>{
        mostrarPeliculas(peliculas);
    }).catch(error =>{
        peliculas.innerHTML=error;
    })


    //Al hacer click en el documento se ejecuta el addEventListener.
    document.addEventListener(
        "click",
        function (evento) {
            //Si la clase del target es película entonces entra en el if.
            if(evento.target.className=="pelicula") {
                let cod=codPelicula(evento);

                //Si el paquetehe json es correcto ejecuta este código.
                datosPelicula(cod).then(value =>{

                    mostrarSinopsis(value);

                    document.getElementById("personajes").innerHTML="";
                    document.getElementById("personajes").innerHTML="<h2>Personajes:</h2>";

                    let ul = document.createElement("ul");
                    ul.setAttribute("id","ulPersonajes")

                    for (let i=0;i<10;i++) {
                        //Si el paquete json es correcto ejecuta este código.
                        informacionPersonajes(value,i).then(valor =>{
                              mostrarPersonaje(valor,ul);

                        //Si no ejecuta este otro.
                        }).catch(error=>{
                            personajes.innerHTML=error;
                        })
                    }
                    document.getElementById("personajes").appendChild(ul);
                    //Si no ejecuta este otro.
                }).catch(error =>{
                    sinopsis.innerHTML=error;

                })

                //Si la clase del target es personaje entonces entra en el if.
            }else if(evento.target.className=="personaje") {

                //Si el paquete json es correcto ejecuta este código.
                informacionPersonaje(evento.target.id).then(value => {

                    let informacion=mostrarInfoPersonaje(value);
                    infoPersonaje.innerHTML=informacion.innerHTML;
                    nave.innerHTML = "";
                    nave.innerHTML = "<h2>Naves</h2>";
                    //Si hay naves entra en el for.
                    if(value.starships.length>0){

                        for (let i=0;i<value.starships.length;i++) {
                            //Si el paquete json es correcto ejecuta este código.
                            getNave(value,i).then(valor => {

                                mostrarNave(valor);
                                //Si no ejecuta este otro.
                            }).catch(error => {
                                nave.innerHTML = error;
                            })
                        }
                        //Si no muestra que no hay naves.
                    }else{
                        document.getElementById("nave").innerHTML="<h2>Naves</h2>";
                        nave.innerHTML += "<p>No tiene Naves</p>";
                    }
                    vehiculo.innerHTML = "";
                    vehiculo.innerHTML = "<h2>Vehiculos</h2>";
                    //Si hay vehiculos entra en el for.
                    if(value.vehicles.length>0){
                        for (let i=0;i<value.vehicles.length;i++) {
                            //Si el paquete json es correcto ejecuta este código.
                            getVehiculos(value,i).then(valor =>{
                                mostrarVehiculos(valor);
                                //Si no ejecuta este otro.
                            }).catch(error => {
                                vehiculo.innerHTML = error;
                            });
                        }
                        //Si no muestra que no hay vehiculos.
                    }else{
                        document.getElementById("Vehiculos").innerHTML="<h2>Vehiculos</h2>";
                        vehiculo.innerHTML += "<p>No tiene Vehiculos</p>";
                    }


                }).catch(error => {
                    infoPersonaje.innerHTML = error;
                })

                //Si la clase del target es nave entonces entra en el if.
            }else if(evento.target.className=="nave"){

                getInfoNave(evento.target.id).then(valor => {

                    let informacion= mostrarInfoNave(valor);
                    infoNave.innerHTML=informacion.innerHTML;

                }).catch(error => {
                    nave.innerHTML = error;
                })

                //Si la clase del target es vehiculo entonces entra en el if.
            }else if(evento.target.className=="vehiculo"){

                getInfoVehiculo(evento.target.id).then(valor => {

                    let informacion=mostrarInfoVehiculo(valor);
                    infoVehiculo.innerHTML=informacion.innerHTML;
                }).catch(error => {
                    nave.innerHTML = error;
                })
            }
        },
        false
    );


};