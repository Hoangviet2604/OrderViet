
const login = document.getElementById("login");
var timeplay = 0;
if (login) {
    login.addEventListener("click", (e) => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        account = accounts.find(element => element.username == username && element.password == password);
        e.preventDefault();
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

      var time = document.getElementById("timeplay");
      const hoursplay = Math.floor(timeplay / 60);
      const minutesplay = timeplay % 60 ;
      
      time.value = format(hoursplay,minutesplay);


      var timeold = document.getElementById("timeold");
      var account = JSON.parse(localStorage.getItem("account"));
      var conlai = account.time - timeplay;
      const hoursold = Math.floor(conlai / 60);
      const minutesold = conlai % 60 ;
      timeold.value = format(hoursold,minutesold);
})


setInterval(playtime,60000);

function playtime () {
     timeplay++;
    var time = document.getElementById("timeplay");
    const hours = Math.floor(timeplay / 60);
    const minutes = timeplay % 60 ;
    time.value = format(hours,minutes);

    var timeold = document.getElementById("timeold");
    var account = JSON.parse(localStorage.getItem("account"));
    var conlai = account.time - timeplay;
    const hoursold = Math.floor(conlai / 60);
    const minutesold = conlai % 60 ;
    timeold.value = format(hoursold,minutesold);
}

function format(a, b) {
    var a1 = a < 10 ? `0${a}`: a;
    var b1 = b < 10 ? `0${b}`: b;

    return `${a1} : ${b1}`;
}