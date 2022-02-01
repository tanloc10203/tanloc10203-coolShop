import {
  handleGetRole,
  handleCreateRole,
  handleUpdateRole,
  handleDeleteRole
} from "../../services/admin/roleService";

const getRole = async (req, res) => {
  try {
    const message = await handleGetRole();
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

const createRole = async (req, res) => {
  try {
    const data = req.body;
    const message = await handleCreateRole(data);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

const deleteRole = async (req, res) => {
  try {
    const id = req.params.id;
    const message = await handleDeleteRole(id);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

const updateRole = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const message = await handleUpdateRole(data, id);
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
  getRole,
  createRole,
  deleteRole,
  updateRole
}