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
    { id: Date.now()+1, name: "Pasear a Dexter"},
    { id: Date.now()+2, name: "Limpiar arenero Chico Terry"},
    { id: Date.now()+3, name: "Comprar comida de Dexter"},
]

//FUNCIÓN QUE INTERPOLA CON HTML

const render = () => {
   
    total.innerHTML = "";
 
    
    let contar = 0
    
    
    arrayTasks.forEach((item) => {
       
        total.innerHTML += 

               
        `<div> ${item.id}  ${item.name}
            <button onclick="eliminar(${item.id})">eliminar
            </button>
            <label for="myCheck">Checkbox:
            </label>
            
            <input type="checkbox">

        </div>`
                            

         contar = contar + 1                         
      },
      
    );

    suma.innerHTML = contar
  
}

render(); //LLAMO A LA FUNCIÓN RENDER

//FUNCIÓN PARA ELIMINAR OBJETO

const eliminar = (id) => {
    arrayTasks = arrayTasks.filter((item) => item.id !== id);
    
    render(); //LLAMAR NUEVAMENTE A LA FUNCIÓN PARA ACTUALIZAR ARREGLO
};



form.addEventListener("submit", (e) => {  //(e): EVENTO
    e.preventDefault(); //EVITAR QUE EL FORMULARIO SE EJECUTE 
    arrayTasks.push({
        id: Date.now(),
        name: newTask.value
    });

    render(); //LLAMAR NUEVAMENTE A LA FUNCIÓN PARA ACTUALIZAR ARREGLO
    newTask.value = "";
   

   
});







