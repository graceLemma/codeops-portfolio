fetch("data/routes.json")
.then(response => response.json())
.then(routes =>{
    console.log(routes);
});
const routeContainer = document.getElementById("routes");

fetch("data/routes.json")
    .then(response => response.json())
    .then(routes => {

        routes.forEach(route => {

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>Bus ${route.routeNumber}</h3>
                <p>${route.from} → ${route.to}</p>
                <p>Via: ${route.via}</p>
                <button>♡ Save</button>
            `;

            routeContainer.appendChild(card);
        });

    });