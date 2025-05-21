const exp = require("express");
const app = exp();
const mysql = require("mysql2");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

//database server
const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Kani@1625",
  database: "Employee",
});

db.getConnection((err) => {
  if (err) {
    console.log("Database is not connected");
  } else {
    console.log("Database is connected");
  }
});

//application server
app.listen(8000, () => {
  console.log("Server is running on the port 8000");
});

const pro = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

//select
app.get("/alluser", (req, res) => {
  const query = "select * from emp";
  db.query(query, (err, result) => {
    if (err) {
      return res.send("Databse Error");
    }
    res.send(result);
  });
});

app.post("/singleuser", (req, res) => {
  const { empno } = req.body;
  if (empno < 7369) {
    return res.send("employee doesn't exist");
  }
  const query = "select * from emp where empno=?";
  db.query(query, [empno], (err, result) => {
    if (err) {
      return res.send("Database error");
    }
    res.send(result);
  });
});

app.post("/sendData", (req, res) => {
  const { empid, ename, job } = req.body;
  const query = " insert into emp (empno,ename,job) values (?,?,?)";
  db.query(query, [empid, ename, job], (err, result) => {
    if (err) {
      return res.send("Database Error");
    }
    return res.send("Data is Inserted");
  });
});
