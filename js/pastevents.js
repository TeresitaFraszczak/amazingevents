let htmlEvents = "";
let cardContainer = document.getElementById("cardcontainer");

let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlEvents += createCard(event);
    };
};
cardContainer.innerHTML = htmlEvents;

    /*htmlEvents += `<div class="col">
                  <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
                    <img src="${events.image}" class="card-img-top" alt="costume party">
                    <div class="card-body">
                      <h5 class="card-title text-center">${events.name}</h5>
                      <p class="card-text">${events.description}</p>
                      <div class="d-grid gap-2 d-md-flex justify-content-between">
                        <p>Price:${events.price}</p>  
                        <a href="#" class="btn btn-outline-danger ">ver más...</a>
                      </div>
                    </div>
                  </div>
                </div>`;
    }
    console.log(htmlEvents);  */  