const express = require("express");
const pg = require("pg");
const cors = require("cors");
require("dotenv").config();
const jwtAuth = require("./controllers/jwtAuth");
const app = express();
const userRoutes = require("./routes/usersroutes");
app.use(express.json());
const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const coachRoutes = require("./routes/coachRoutes");
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 8000;
const pool = require("./db");


pool.connect().then(() => {
  app.listen(port, () => {
    console.log("Server working on port " + port);
  });
});

app.use(jwtAuth);
app.use('/user' , userRoutes);
app.use('/product' , productRoutes);
app.use('/coach' , coachRoutes);
app.use('/payment' , paymentRoutes)


