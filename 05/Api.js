<<<<<<< HEAD
const con = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((val) => {
      con.innerHTML += `<img src=${val.image} width="200px">`;
    });
  });
=======
const con = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((val) => {
      con.innerHTML += `<img src=${val.image} width="200px">`;
    });
  });
>>>>>>> 846b000 (Success)
