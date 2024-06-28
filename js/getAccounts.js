get(urlAccount,displayAccounts);

var accounts = [];
var editAccountId = null;

function addAccount() {
    
    var username = document.getElementById("usernameAccount").value;
    var password = document.getElementById("passwordAccount").value;
    var price = document.getElementById("priceAccount").value;

    var time = parseInt(price)*60 ;

    const account =  {
        username: username ,
        password: password,
        time : time
    }

    if(editAccountId) {
       edit(urlAccount,editAccountId,account);
    }else {
        add(urlAccount,account);
    }
  
}

function displayAccounts(data) {

    var accounttable = document.getElementById("accounttable");
    accounts = data;
    data.forEach( (element,index) => {
        const item = document.createElement("tr");
        const hours = Math.floor(element.time / 60);
        const minutes = element.time % 60 ;


        item.innerHTML = `
         <th scope="row">${index + 1}</th>
                            <td>${element.username}</td>
                            <td>0${hours} : ${minutes}0</td>
                            <td>
                                <button onclick="editAccount(${element.id})" type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addAccount">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onclick="deleteAccount(${element.id})" type="button" class="btn btn-danger">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </td>`;
                            accounttable.appendChild(item);
        });
      
}

function deleteAccount(id) {
    deleted(urlAccount,id);
}

function editAccount(id) {

    editAccountId = id ;
    var username = document.getElementById("usernameAccount");
    var password = document.getElementById("passwordAccount");
    var price = document.getElementById("priceAccount");
    var titleAccount = document.getElementById("titleAccount");
    var btn = document.getElementById("btn-account");
     
    console.log(titleAccount);

    titleAccount.innerText = editAccountId ? "Edit Account" : "Add Account" ;
    btn.innerText = editAccountId ? "Update Account" : "Save Account" ;

    const account = accounts.find(element => element.id == id);

    username.value = account.username;
    password.value = account.password;
    price.value = account.time/60;
}

function resetAccount() {

    editAccountId = null;
    
    var username = document.getElementById("usernameAccount");
    var password = document.getElementById("passwordAccount");
    var price = document.getElementById("priceAccount");
    var titleAccount = document.getElementById("titleAccount");
    var btn = document.getElementById("btn-account");

    titleAccount.innerText = editAccountId ? "Edit Account" : "Add Account" ;
    btn.innerText = editAccountId ? "Update Account" : "Save Account" ;

    username.value = "";
    password.value = "";
    price.value = "";
}