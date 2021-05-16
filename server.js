const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// database connection
dbConnection();

// handling CORS error
app.use(cors());

// request payload middleware
app.use(express.json()); // allows for request content-type: "application/json"
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res, next) => {
  res.send("Hello Man");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
