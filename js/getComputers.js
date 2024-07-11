
get(urlComputer,displayComputers);

function displayComputers(data) {
    var laptop = document.querySelector(".laptop");
    var sonliem = document.getElementById("sonliem");
    data.forEach(element => {

        const item = document.createElement("div");
        item.classList.add("col");
 
     if(laptop) {
        var img = element.status ? "../images/desktop-computer-open.png" : "../images/desktop-computer-close.png";
        var btn = element.status ? ` <button type="button" class="btn btn-secondary"><i
                                                class="fa-solid fa-lock"></i> Lock</button>
                                        <button onclick="cart(${element.id})" data-bs-toggle="modal" data-bs-target="#Cart" type="button" class="btn btn-warning text-white"> <i
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
     }
      if(sonliem) {
       if(!element.status) {
            var option = document.createElement("option");
                option.innerText = `Máy ${element.id}`;
                option.value = element.id ;
          sonliem.appendChild(option);
       }
      }
 
    });
}
