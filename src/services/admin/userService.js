import User from "../../models/User";
import Role from "../../models/AllCode";

let handleUpdateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        const { role_id, ...others } = data;
        let updateUser = null;
        if (role_id) {
          const role = await Role.findOne({ code: role_id }).exec();
          if (role) {
            const { _id } = role._doc;

            const newData = {
              role_id: _id,
              ...others,
            };

            updateUser = await User.findByIdAndUpdate(
              id,
              { $set: newData },
              { new: true }
            );
          } else {
            updateUser = await User.findByIdAndUpdate(
              id,
              { $set: data },
              { new: true }
            );
          }
          !updateUser && resolve({ error: 1, message: "User not found..." });
          resolve({ error: 0, message: "Update Success!!!" });
        }
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetUser = (page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        let newLimit = parseInt(limit);
        let newPage = parseInt(page);

        newPage = newPage < 1 ? 1 : newPage;

        !newLimit &&
          resolve({ error: 3, message: "Get user failed...", data: [] });
        !newPage &&
          resolve({ error: 4, message: "GET users failed", data: [] });

        const skip = (newPage - 1) * newLimit;

        let users = await User.find({ delete: false })
          .populate({
            path: "role_id",
            // match: { code: { $ne: 'R1' } }
          })
          .skip(skip)
          .limit(newLimit)
          .exec();

        let count = await User.countDocuments({ delete: false });

        users = users.map((user) => {
          let { password, ...others } = user._doc;
          return others;
        });

        const totalPage = Math.ceil(count / newLimit);
        resolve({
          error: 0,
          message: "GET users success!!!",
          totalPage,
          data: users,
        });
      } else {
        let users = await User.find({ delete: false }).populate("role_id");
        let count = await User.countDocuments({ delete: false });
        !users && resolve({ error: 3, message: "Users not found..." });
        users = users.map((user) => {
          let { password, ...others } = user._doc;
          return others;
        });
        resolve({
          error: 0,
          message: "Get users successfully!!!",
          data: users,
          count,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        await User.findById(id)
          .populate("role_id")
          .exec((err, user) => {
            err && resolve({ error: 1, message: "Get user not found..." });
            let { password, ...others } = user._doc;
            resolve({ error: 0, message: "Get User Success!!!", data: others });
          });
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

let handleDeleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        await User.findByIdAndUpdate(id, { delete: true }).exec((err, user) => {
          err && resolve({ error: 2, message: "User not found..." });
          resolve({ error: 0, message: "Delete user successfully" });
        });
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUpdateUser,
  handleGetUser,
  handleGetUserById,
  handleDeleteUser,
};
