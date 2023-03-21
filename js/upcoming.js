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

   let textoingresado = inputBusqueda.value.toLowerCase().trim();
   HTMLresultados = Search(categoriasSelect,textoingresado)

   document.querySelector("#cardcontainer").innerHTML=HTMLresultados; 
  });


  function Search(categorias,textoingresado){
     let HTMLresultados="";
     if (categorias.length>0 && textoingresado == ""){
        eventosfuturos.filter(event => categorias.includes(event.category)).forEach(event =>{
           HTMLresultados += createCard(event)});
           
           console.log(HTMLresultados);
        }else if(categorias.length>0 && textoingresado != ""){ 
           eventosfuturos.filter(event => categorias.includes(event.category)).filter(event =>event.name.toLowerCase().includes(textoingresado) || event.description.toLowerCase().includes(textoingresado)).forEach(event =>
                {HTMLresultados += createCard(event)});
          
                console.log(HTMLresultados);
        }else if(categorias.length==0 && textoingresado != ""){ 
           eventosfuturos.filter(event =>event.name.toLowerCase().includes(textoingresado) || event.description.toLowerCase().includes(textoingresado)).forEach(event =>
                 {HTMLresultados += createCard(event)});
                 console.log(HTMLresultados);       
                
        }else if(categorias.length==0 && cardbusqueda.length == 0){
                eventosfuturos.forEach(event =>
                {HTMLresultados += createCard(event)});
            }
           
           return HTMLresultados;
      }
  
//búsqueda
//let busqueda=[];

let inputBusqueda=document.getElementById("search");
document.querySelector("#form-search").onsubmit = (e)=> {
  e.preventDefault();
  let HTMLresultados="";
  let categoriasSelect=[];
  categoriasItems.forEach(checkbox =>{
     if (checkbox.checked){
        categoriasSelect.push(checkbox.value);
     }
  });
  console.log(categoriasSelect);


let textoingresado = inputBusqueda.value.toLowerCase().trim();


HTMLresultados = Search(categoriasSelect,textoingresado);

document.querySelector("#cardcontainer").innerHTML=HTMLresultados;
}










 