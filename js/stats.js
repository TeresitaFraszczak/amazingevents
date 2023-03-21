let pasteventslist= [];

for (let event of data.events){
    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);  
    if (eventDate<currentDate){
        pasteventslist.push(event);
    }
}
console.log(pasteventslist);

//PRIMERA TABLA

let tableEventstats = document.getElementById("primertabla");

function getEventsStats() {          
    try{
    let tableBodyHTML = "";       
    tableBodyHTML += `<tr>
        <td>${getBigger().name}</td>
        <td>${getSmaller().name}</td>
        <td>${getLarger().name} </td>
    </tr>`;
    tableEventstats.innerHTML = tableBodyHTML;
    }catch (error){
        console.log(error);
 }
    };
 
getEventsStats(); 

function getBigger(pastevents){
    return pasteventslist.reduce((bigger, current) => {
        if ((current.assistance/current.capacity) > (bigger.assistance/bigger.capacity)){
            return current;
        } else {
            return bigger;
        }
    });
}
console.log(getBigger().name);



function getSmaller(pastevents){
    return pasteventslist.reduce((smaller, current) => {
        if ((current.assistance/current.capacity) < (smaller.assistance/smaller.capacity)){
            return current;
        } else {
            return smaller;
        }
    });
}
console.log(getSmaller());


function getLarger(events){
    return data.events.reduce((larger, current) => {
        if (current.capacity > larger.capacity){
            return current;
        } else {
            return larger;
        }
    });
}
console.log(getLarger());

// SEGUNDA TABLA

let upcomingeventslist=[];

for (let event of data.events){
    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);  
    if (eventDate>currentDate){
        upcomingeventslist.push(event);
    }
}

let tableBodyUpcoming = document.getElementById("segundatabla");

function getUpcomingEvents() {        
    let tableBodyHTML = "";
    categorias.forEach(category => {

        let eventosFiltrados = getEventsbycategory(category,upcomingeventslist);
        let ganancias = Ganancias(eventosFiltrados);  
        let porcentajeAsistencia = PorcentajeAsistencia(eventosFiltrados);

        tableBodyHTML += `<tr>
        <td>${category}</td>
        <td>${ganancias}</td>
        <td>${porcentajeAsistencia} </td>
    </tr>`;

    console.log(tableBodyHTML);
    });

    tableBodyUpcoming.innerHTML = tableBodyHTML;

}
getUpcomingEvents();

// TERCERA TABLA

let tableBodyPast = document.getElementById("tercertabla");
function getPastEvents() {
    let tableBodyHTML = "";
    categorias.forEach(category => {   
        let eventosFiltrados = getEventsbycategory(category,pasteventslist);
        console.log(getEventsbycategory(category,pasteventslist));
        let ganancias = Ganancias(eventosFiltrados);  
        let porcentajeAsistencia = PorcentajeAsistencia(eventosFiltrados);
        tableBodyHTML += `<tr>
        <td>${category}</td>
        <td>${ganancias}</td>
        <td>${porcentajeAsistencia} </td>
        </tr>`;
        });
        tableBodyPast.innerHTML = tableBodyHTML;

    }
getPastEvents();

function getEventsbycategory(category,events) {
    return events.filter(event => {
        if (event.category.includes(category)) {
            return true;
        } else {
            return false;
        }
    });
}


function Ganancias(events){   
    let sumaGanancias= 0;
    events.forEach(event => {
        if (event.assistance != null){
         sumaGanancias += (event.price * event.assistance);
        } else{
            sumaGanancias += (event.price * event.estimate);
        }
        })
    return ( "$ "+ sumaGanancias);
}

function PorcentajeAsistencia(events){   
    let sumaAsistencia = 0;
    let sumaCapacidad = 0;
    events.forEach(event => {
        if (event.assistance != null){
        (sumaAsistencia += event.assistance) && (sumaCapacidad += event.capacity)
    } else{
        (sumaAsistencia += event.estimate) && (sumaCapacidad += event.capacity)
    }
     });
     if(sumaAsistencia === 0) {
        return "0 %";
    } else {
    return Math.round((sumaAsistencia/sumaCapacidad)*100) + " %";
}

}
  