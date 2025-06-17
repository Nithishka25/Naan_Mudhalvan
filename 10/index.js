
const express = require("express");
const { default: mongoose } = require("mongoose");
const port = 5000;
const app = express();
const user = require('./Routes/Users');
app.use(express.json());
app.listen(port, () => {
  console.log("Server is running on the port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/user', user);

mongoose
  .connect(
    "mongodb+srv://kanishmala242:kanishmala@cluster0.gnnfepu.mongodb.net/Session10?retryWrites=true&w=majority&appName=Cluster0",
    
  )
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
