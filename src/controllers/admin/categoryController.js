import {
  handleCreateCategory,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory
} from "../../services/admin/categoryService";

let createCategory = async (req, res) => {
  try {
    let data = req.body;
    let message = await handleCreateCategory(data);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let getCategory = async (req, res) => {
  try {
    let limit = req.query.limit;
    let page = req.query.page;
    limit = limit || 5;
    let message = await handleGetCategory(limit, page);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let updateCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let message = await handleUpdateCategory(id, data);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let deleteCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let message = await handleDeleteCategory(id);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}



module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
};