import {
  handleCreateProduct,
  handleDeleteProduct, 
  handleGetProduct,
  handleGetProductById, 
  handleUpdateProduct
} from "../../services/admin/productService";

let getProduct = async (req, res) => {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    limit = limit || 5;
    let message = await handleGetProduct(page, limit);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

let getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    let message = await handleGetProductById(id);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

let createProduct = async (req, res) => {
  try {
    let data = req.body;
    let message = await handleCreateProduct(data);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: - 1, message: "Error from server..." });
  }
}

let deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let message = await handleDeleteProduct(id);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: - 1, message: "Error from server..." });
  }
}

let updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let message = await handleUpdateProduct(id, data);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: - 1, message: "Error from server..." });
  }
}

module.exports = { 
  getProduct, 
  getProductById, 
  createProduct, 
  deleteProduct, 
  updateProduct 
};