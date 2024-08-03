/**
 * ! Layer ini bertujuan untuk handle business logic
 * * function nya dapat reusable
 */

import {
  createProducts,
  deleteProducts,
  editProduct,
  findProducts,
  findProductsById,
} from "./product.repository.js";

export const getAllProducts = async () => {
  return await findProducts();
};

export const getProductsById = async (id) => {
  const product = await findProductsById(id);

  if (!product) throw Error("Product does not exist");

  return product;
};

export const insertProduct = async (reqDataProduct) => {
  return await createProducts(reqDataProduct);
};

export const destroyProduct = async (idProduct) => {
  await getProductsById(idProduct);

  return await deleteProducts(idProduct);
};

export const updateProductById = async (id, reqData) => {
  await getProductsById(id);

  return await editProduct(id, reqData);
};
