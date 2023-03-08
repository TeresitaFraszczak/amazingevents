let htmlEvents = "";
let cardContainer = document.getElementById("cardcontainer");
let eventosfuturos =[];
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        htmlEvents += createCard(event);
        eventosfuturos.push(event);
    };
};
cardContainer.innerHTML = htmlEvents;

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
//FALTA
 // si hacen click en categorias y busqueda no....document.querySelector("#cardcontainer").innerHTML=HTMLresultados; 
 // si no hacen click en categ y en busq si...document.querySelector("#cardcontainer").innerHTML=resultadoBusqueda;
 // si hacen click y busqueda.....como se el orden?
if (categoriasSelect.length > 0){
   eventosfuturos.filter(event => categoriasSelect.includes(event.category)).forEach(events =>{
      HTMLresultados += createCard(events)});
      
      console.log(HTMLresultados);
   } else{
      eventosfuturos.forEach(events =>{
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

for (let event of eventosfuturos) {
   if (event.name.toLowerCase().includes(textingresado)
   ||event.description.toLowerCase().includes(textingresado)) {
      resultadoBusqueda+= createCard(event); 
   }
}
   
console.log(resultadoBusqueda);
document.querySelector("#cardcontainer").innerHTML=resultadoBusqueda;
}

