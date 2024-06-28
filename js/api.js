var urlComputer = "http://localhost:3000/computers";
var urlFood = "http://localhost:3000/food";
var urlAccount = "http://localhost:3000/accounts";

function get(url,displayData) {
    fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => displayData(data))
    .catch((error) => console.error("Error :", error))
}
function add(url,object) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => console.error('Error creating post:', error));
  }

  function deleted(url,id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {      
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}
function edit(url,id,order) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Đơn hàng đã được cập nhật', data);
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}