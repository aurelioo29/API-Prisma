/**
 * ! Layer untuk Komunikasi dengan database
 */

import prisma from "../db/index.js";

export const findProducts = async () => {
  return await prisma.product.findMany();
};

export const findProductsById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

export const createProducts = async (reqData) => {
  return prisma.product.create({
    data: {
      name: reqData.name,
      price: reqData.price,
      stock: reqData.stock,
      description: reqData.description,
    },
  });
};

export const deleteProducts = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

export const editProduct = async (id, reqData) => {
  return prisma.product.update({
    where: {
      id,
    },
    data: {
      name: reqData.name,
      price: reqData.price,
      stock: reqData.stock,
      description: reqData.description,
    },
  });
};
