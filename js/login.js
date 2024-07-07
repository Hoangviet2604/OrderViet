
const login = document.getElementById("login");

if (login) {
    login.addEventListener("click", (e) => {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        account = accounts.find(element => element.username == username && element.password == password);
         console.log(account);
        if (account) {
            if (account.role == "admin") {
                window.location.href = "Home.html";
            } else {
                window.location.href = "Client.html";
                localStorage.setItem("account", JSON.stringify(account));
            }

        } else {
            alert("Ban da nhap sai");
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {

    var account = JSON.parse(localStorage.getItem("account"));

      var time = document.getElementById("time");
      const hours = Math.floor(account.time / 60);
      const minutes = account.time % 60 ;
      time.value = format(hours,minutes);

      var timeoke = document.getElementById("timeplay");
      const hoursplay = Math.floor(account.timeplay / 60);
      const minutesplay = account.timeplay % 60 ;

      timeoke.value = format(hoursplay,minutesplay);


      var timeold = document.getElementById("timeold");
      var conlai = account.time - account.timeplay;
      const hoursold = Math.floor(conlai / 60);
      const minutesold = conlai % 60 ;
      timeold.value = format(hoursold,minutesold);

      var timeprice = document.getElementById("timeprice");
      timeprice.value = (account.timeplay/60).toFixed(3) + "$";
})


setInterval(playtime,5000);

function playtime () {
     var account = JSON.parse(localStorage.getItem("account"));
      account.timeplay++;
    localStorage.setItem("account",JSON.stringify(account));
      edit(urlAccount,account.id,account);                                                
}

function format(a, b) {
    var a1 = a < 10 ? `0${a}`: a;
    var b1 = b < 10 ? `0${b}`: b;

    return `${a1} : ${b1}`;
}