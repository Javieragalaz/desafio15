// ASIGNACIÓN DE VARIABLES GLOBALES

const form = document.querySelector("#form");
const newTask = document.querySelector("#newTask");
const total = document.querySelector("#total");
const suma = document.querySelector("#suma")
const completed = document.querySelector("#completed")
const checking = document.querySelector("#cheking")
let checkBox = document.getElementById("myCheck1");

//ARREGLO CON 3 TAREAS INICIALES

let arrayTasks = [
    { id: Date.now()+1, name: "Pasear a Dexter", done: false},
    { id: Date.now()+2, name: "Limpiar arenero Chico Terry", done: false},
    { id: Date.now()+3, name: "Comprar comida de Dexter", done: false},
]

//FUNCIÓN QUE INTERPOLA CON HTML

const render = () => {
   
    total.innerHTML = "";
 
    
    let contar = 0
    
    
    arrayTasks.forEach((item) => {
       
        total.innerHTML += 

               
        `
        <div>
          ${item.id}  
          ${item.name} 
           <tr><td><button onclick="eliminar(${item.id})">eliminar
            </button> 
           <label for="myCheck">Realizada:
            </label>
            
            <input ${item.done ? "checked" : ""} onchange="completar(${item.id})" type="checkbox">
        `
                            

         contar = contar + 1                         
      },
      
    );

    suma.innerHTML = contar
    completed.innerHTML = arrayTasks.filter((item) => item.done).length
  
}

render(); //LLAMO A LA FUNCIÓN RENDER

//FUNCIÓN PARA ELIMINAR OBJETO

const eliminar = (id) => {
    arrayTasks = arrayTasks.filter((item) => item.id !== id);
    
    render(); //LLAMAR NUEVAMENTE A LA FUNCIÓN PARA ACTUALIZAR ARREGLO
};

const completar = (id) => {

    arrayTasks.forEach((item) => {
        if (item.id === id && !item.done) {
            item.done = true
        } else if (item.id === id && item.done) {
            item.done = false
        }
    }) 

    render()
}


form.addEventListener("submit", (e) => {  //(e): EVENTO
    e.preventDefault(); //EVITAR QUE EL FORMULARIO SE EJECUTE 
    arrayTasks.push({
        id: Date.now(),
        name: newTask.value,
        done: false,
    });

    render(); //LLAMAR NUEVAMENTE A LA FUNCIÓN PARA ACTUALIZAR ARREGLO
    newTask.value = "";
   

   
});

