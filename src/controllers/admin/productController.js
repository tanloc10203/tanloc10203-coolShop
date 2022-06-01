import {
  handleCreateProduct,
  handleDeleteProduct,
  handleGetProduct,
  handleGetProductById,
  handleUpdateProduct,
  handleSearchProduct
} from "../../services/admin/productService";

let getProduct = async (req, res) => {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    const deleteQuery = req.query.delete;
    limit = limit || 5;
    let message = await handleGetProduct(page, limit, deleteQuery);
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
    const deleteQuery = req.query.delete;
    let message = await handleDeleteProduct(id, deleteQuery);
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
    const recover = req.query.recover;
    let message = await handleUpdateProduct(id, data, recover);
    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: - 1, message: "Error from server..." });
  }
}

let searchProduct = async (req, res) => {
  try {
    const filter = req.query;
    let message = await handleSearchProduct(filter);
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
  updateProduct,
  searchProduct
};