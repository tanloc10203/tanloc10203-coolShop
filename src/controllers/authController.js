import { handleLogin, handleRegister, handleGetUserLogin } from "../services/authService";

let register = async (req, res) => {
  try {
    let data = req.body;
    let message = await handleRegister(data);
    return res.json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

let login = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let message = await handleLogin(email, password);

    const { error } = message;

    if (error === 0) {
      return res.status(200).json(message);
    } else {
      return res.status(203).json(message);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

const getUserLogin = async (req, res) => {
  try {
    const user = req.user;
    if (user && user !== undefined) {
      const message = await handleGetUserLogin(user);
      return res.status(200).json({ ...message });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: -1,
      message: 'Error from server...'
    });
  }
}

module.exports = {
  login,
  register,
  getUserLogin
};