let htmlEvents = "";
let cardContainer = document.getElementById("cardcontainer");
    
  let currentDate = new Date(data.currentDate);
   for (let event of data.events) {
      let eventDate = new Date(event.date);
      if (eventDate = currentDate) {
          htmlEvents += createCard(event);
       };
    };
  cardContainer.innerHTML = htmlEvents; 

  //creo dinamicamente las categorias desde la función
let checkbox = document.getElementById('containercheck');
let HTMLhome ="";
for(let category of categorias){
   HTMLhome += creoCategoria(category);
}
checkbox.innerHTML = HTMLhome;

//que tome la opcion seleccionada
let categoriasItems= document.querySelectorAll(".form-check-input");
console.log(categoriasItems);

//capturar el click de categorias en un array 
categoriasItems.forEach(checkbox => checkbox.onchange = () => {
   let HTMLresultados="";
   let categoriasSelect=[];
   categoriasItems.forEach(checkbox =>{
      if (checkbox.checked){
         categoriasSelect.push(checkbox.value);
      }
   });
   console.log(categoriasSelect);

   
if (categoriasSelect.length > 0){
   data.events.filter(event => categoriasSelect.includes(event.category)).forEach(events =>{
      HTMLresultados += createCard(events)});
      
      console.log(HTMLresultados);
   } else{
      data.events.forEach(events =>{
         HTMLresultados += createCard(events)});
   }
   document.querySelector("#cardcontainer").innerHTML=HTMLresultados; 
});


//búsqueda
let busqueda=[];

let inputBusqueda=document.getElementById("search");
document.querySelector("#form-search").onsubmit = (e)=> {
   e.preventDefault();
let resultadoBusqueda="";

let textingresado = inputBusqueda.value.toLowerCase().trim();

for (let event of data.events) {
   if (event.name.toLowerCase().includes(textingresado)
   ||event.description.toLowerCase().includes(textingresado)) {
      resultadoBusqueda+= createCard(event); 
   }
}
   
console.log(resultadoBusqueda);
document.querySelector("#cardcontainer").innerHTML=resultadoBusqueda;
}


