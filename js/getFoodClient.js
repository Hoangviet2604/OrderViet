get(urlFood, displayFoodClient);
get(urlOrder, displayOrder);
let orders ;
function displayOrder(data) {
    orders = data ;
}
function displayFoodClient(data) {

    var foodclient = document.querySelector(".foods");
    data.forEach(element => {
        const item = document.createElement("div")
        item.classList.add("col");

        item.innerHTML = `
        <div class="card p-2">
                            <div class="drink">
                                <h6>${element.name}</h6>
                                <span class="idFood">${element.id}</span>
                            </div>
                            <div class="card-img">
                                <img   src="${element.img}" class="card-img-top" alt="...">
                            </div>
                            <h5 class="text-center pb-2">${element.price} $</h5>
                            <p><button><i class="fa-solid fa-circle-minus"></i></button><input class="quantity" readonly value="0" type="text"><button><i class="fa-solid fa-circle-plus"></i></button></p>
                        </div>`;
                        foodclient.appendChild(item);

        var fa1 = item.querySelector(".fa-circle-minus")
        var fa2 = item.querySelector(".quantity")
        var fa3 = item.querySelector(".fa-circle-plus")
        
        fa1.addEventListener("click",() => {
            if(parseInt(fa2.value) > 0) {
                fa2.value = parseInt(fa2.value) - 1;
            }
        });

        fa3.addEventListener("click",() => {     
            fa2.value = parseInt(fa2.value) + 1;
        })
    });
};

function orderService () {
        
    var may = JSON.parse(localStorage.getItem("may"));
    var ordered = orders.find(element => element.id == may.id);
    console.log(ordered);
    var menu = ordered ? [...ordered.items] : [];

    var foods = document.querySelectorAll(".foods .col");
     console.log(foods);
     foods.forEach(element => {
        const quantity = parseInt(element.querySelector(".quantity").value);
        if(quantity > 0) {
            const idFood = element.querySelector(".idFood").textContent ;
            const index = menu.findIndex(element => element.idFood == idFood);
            if(index != -1) {
               menu[index].quantity += quantity ;
            }else {
                menu.push(
                    {
                        "idFood": idFood,
                        "quantity": quantity
                    }
                )
            }
        }
        console.log(menu);
        if(menu.length > 0) {
            const order = {
                "id" : may.id,
                "idAccount" : may.accountId,
                "items" : menu
            }
   
            if(ordered) {
                edit(urlOrder,may.id,order);
            }else {
                add(urlOrder,order);
            }
        }
     })
}