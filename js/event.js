console.log([document]);

const queryString = location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
        
        const id = params.get("id");
        const evento = data.events.find(event => event._id == id);

 const cardDetail = document.querySelector("#containerdetails");
 cardDetail.innerHTML = `<div class="card mb-3 text-bg-dark mb-3" style="max-width: 800px;">
                        <div class="row g-0">
                        <div class="col-md-6 d-flex py-2">
                            <img src="${evento.image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                            <h5 class="card-title text-center">${evento.name}</h5>
                            <p class="card-text">${evento.description}</p>
                            <p class="card-text">Place: ${evento.place}</p>
                            <p class="card-text">Capacity: ${evento.capacity}</p>
                            <p class="card-text">Date: ${evento.date}</p>
                            <p class="card-text">Price: U$S${evento.price}</p>
                            </div>
                        </div>
                        </div>
                        </div>`

