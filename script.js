function agregarTarea(){

let tarea = prompt("Escribe tu nueva tarea");

if(tarea){

let lista = document.getElementById("listaTareas");

let item = document.createElement("li");

item.textContent = tarea;

lista.appendChild(item);

}

}