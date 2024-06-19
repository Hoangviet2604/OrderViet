var urlComputer = "http://localhost:3000/computers";

function get(url) {
    fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => displayData(data))
    .catch((error) => console.error("Error :", error))
}