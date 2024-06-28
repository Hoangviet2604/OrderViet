get(urlFood, displayFood);

function displayFood(data) {

    var food = document.querySelector(".food");

    data.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = `
        <div class="card p-2 mt-3">
                            <div class="drink">
                                <span>${element.id}</span>
                                <h6>${element.name}</h6>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div class="card-img">
                                <img  src="${element.img}" class="card-img-top" alt="...">
                            </div>
                            <h5 class="text-center pb-2">${element.price} $</h5>
                        </div> `;
                        food.appendChild(item);
    });
}