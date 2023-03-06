let htmlEvents = "";
let cardContainer = document.getElementById("cardcontainer");

let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        htmlEvents += createCard(event);
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