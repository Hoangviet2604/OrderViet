
get(urlComputer,displayComputers);

function displayComputers(data) {

    var laptop = document.querySelector(".laptop");

    data.forEach(element => {

       const item = document.createElement("div");
       item.classList.add("col");

        var img = element.status ? "../images/desktop-computer-open.png" : "../images/desktop-computer-close.png";
        var btn = element.status ? ` <button type="button" class="btn btn-secondary"><i
                                                class="fa-solid fa-lock"></i> Lock</button>
                                        <button type="button" class="btn btn-warning text-white"> <i
                                                class="fa-solid fa-cart-plus"></i> Cart</button>` : `<button type="button" class="btn btn-success"><i class="fa-solid fa-unlock"></i> Open</button>`;

        item.innerHTML =  ` <div class="card p-2 mt-3">
                                    <span>${element.id}</span>
                                    <div class="card-img px-5">
                                        <img src="${img}" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-button">
                                       ${btn}
                                    </div>
                                </div>`;
                   laptop.appendChild(item);
    });
}