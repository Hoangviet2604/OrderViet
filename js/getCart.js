get(urlOrder, displayOrder);
let orders ;
function displayOrder(data) {
    orders = data ;
}

function cart (id) {
    let cart = orders.find(element => element.id == id);
    var dichvu = document.querySelector(".dichvu");
    var totalhienthi = document.getElementById("total");
    totalhienthi.innerText = "";
    dichvu.innerHTML = "";
    var total = 0;
    cart.items.forEach((element,index) => {
        var mon = foods.find(a => a.id == element.idFood);
        total += element.quantity*mon.price;
        dichvu.innerHTML += `
         <tr>
                    <th scope="row fod">${index + 1}</th>
                    <td><img style="height: 50px;" src="${mon.img}" alt=""></td>
                    <td>${mon.name}</td>
                    <td>${element.quantity}</td>
                    <td>${mon.price} $</td>
                  </tr>

        `
    });
    totalhienthi.innerText = `${total} $` ;
}