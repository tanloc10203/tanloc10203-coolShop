import {
  handleUpdateUser,
  handleGetUser,
  handleGetUserById,
  handleDeleteUser
} from "../../services/admin/userService";

let getUser = async (req, res) => {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    limit = limit || 2;
    let message = await handleGetUser(page, limit);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let getUserById = async (req, res) => {
  try {
    let id = req.params.id;
    let message = await handleGetUserById(id);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let updateUser = async (req, res) => {
  try {
    let data = req.body;
    let id = req.params.id;
    let message = await handleUpdateUser(id, data);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let message = await handleDeleteUser(id);
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
  getUser,
  updateUser,
  deleteUser,
  getUserById
};