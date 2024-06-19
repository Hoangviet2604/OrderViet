var h4 = document.querySelectorAll(".left h4")

var icon = document.querySelector(".left-header .icon")

var leftmain = document.querySelector(".left-main")
var h3 = document.querySelectorAll(".left-header h3")
var iconi = document.querySelectorAll(".left-header .icon i")
var item = document.querySelectorAll(".left-main .content")
var boxs = document.querySelectorAll(".right-main .box")
console.log(item);
icon.addEventListener("click", () => {
    h4.forEach(item => item.classList.toggle("hidden"));
    h3.forEach(item => item.classList.toggle("hidden"));
    leftmain.classList.toggle("left-main");
    iconi.forEach(item => item.classList.toggle("hidden"));

})

item.forEach((element,index) => {
    element.addEventListener("click", function() {
        item.forEach(element => element.style.color = "white");
        element.style.color = "red";
        boxs.forEach(element => element.style.display = "none");
        boxs[index].style.display = "block";
    }
)
});



