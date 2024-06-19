
get(urlComputer);

function displayData(data) {

    var laptop = document.querySelector(".laptop");

    data.forEach(element => {

        var img = element.status ? "maymo.png" : "122-removebg-preview.png";
        var btn = element.status ? ` <button type="button" class="btn btn-secondary"><i
                                                class="fa-solid fa-lock"></i> Lock</button>
                                        <button type="button" class="btn btn-warning text-white"> <i
                                                class="fa-solid fa-cart-plus"></i> Cart</button>` : `<button type="button" class="btn btn-success"><i class="fa-solid fa-unlock"></i> Open</button>`
        laptop.innerHTML +=
            `
             <div class="col mb-2">
                                <div class="card p-3">
                                    <span>${element.id}</span>
                                    <div class="card-img px-5">
                                        <img src="${img}" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-button">
                                       ${btn}
                                    </div>
                                </div>
                            </div>
        
        `
    });
}