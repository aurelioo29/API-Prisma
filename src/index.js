import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;

// middleware for parse body JSON
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hellow World!!");
  console.log("END POINT Have Been HIT");
});

// main end point
import productController from "./product/product.controller.js";
app.use("/products", productController);

app.listen(port, () => {
  console.log(`Server has run http://localhost:${port}`);
});
