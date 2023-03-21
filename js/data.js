const urlAPI =("https://mindhub-xj03.onrender.com/api/amazing");
async function getData(){
try{
  let respuesta = await fetch(urlAPI);
  let data = await respuesta.json();
  localStorage.setItem("localData",JSON.stringify(data));
  } catch (error){
    console.error("error "+ error);
  }

  }
getData();
let data = JSON.parse(localStorage.getItem("localData"));


  
  function createCard(event){
    let card=`<div class="col">
    <div id=card class="card text-bg-dark mb-3">
      <img src="${event.image}" class="card-img-top" alt="costume party">
      <div class="card-body">
        <h5 class="card-title text-center">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="d-grid gap-2 d-md-flex align-items-end justify-content-between">
          <p>Price: US$ ${event.price}</p>  
          <a href="./event.html?id=${event._id}" class="btn btn-outline-danger ">+ more ...</a>
        </div>
      </div>
    </div>
  </div>`;  
  return card;
  }
//hacer una función que tenga data y extraiga las categorias y las guarde..luego .then llamarlas arriba en la func async
let categorias=[];
function extraerCategoria(data){
  data.events.forEach (evento => {
    if(!categorias.includes(evento.category)){
      categorias.push(evento.category)
    }
  });
}  



//1 obtener categoria de las card
categorias =[];
data.events.forEach (evento => {
  if(!categorias.includes(evento.category)){
    categorias.push(evento.category)
  }
});
console.log(categorias);

function creoCategoria(category){
    return  `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox${category}" value="${category}" name="categoria">
    <label class="form-check-label" for="inlineCheckbox${category}">${category}</label>
 </div>`;
  }


  /*console.log([document])
   let divContainer = document.querySelector("#cardcontainer")
   function rederCard(eventos){
    console.log(eventos)
   }
   let contenedor = document.createElement("div")*/

