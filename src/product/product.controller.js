/**
 * ! Layer handle request & response
 * * biasanya handle validasi body
 */

import express from "express";
import prisma from "../db/index.js";
import {
  destroyProduct,
  getAllProducts,
  getProductsById,
  insertProduct,
  updateProductById,
} from "./product.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const products = await getProductsById(productId);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const reqDataProduct = req.body;

    const products = await insertProduct(reqDataProduct);

    res.status(201).send({ message: "data products created", data: products });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const idProduct = req.params.id;

    await destroyProduct(parseInt(idProduct));
    res.status(200).send({ message: "products deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const idData = req.params.id;
    const reqData = req.body;

    if (
      !(reqData.name && reqData.price && reqData.stock && reqData.description)
    ) {
      return res.status(400).send({ message: "Some field missing" });
    }

    const product = await updateProductById(parseInt(idData), reqData);
    res.status(201).send({ message: "products updated", data: product });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const idData = req.params.id;
    const reqData = req.body;

    const product = await updateProductById(parseInt(idData), reqData);
    res.status(201).send({ message: "products updated", data: product });
    console.log("Route ini telah di HIT");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
