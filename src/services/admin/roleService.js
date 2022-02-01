import Role from "../../models/AllCode";

const handleGetRole = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const role = await Role.find({ keyMap: 'ROLE' });
      resolve({ error: 0, message: 'get role successfully', data: role });
    } catch (error) {
      reject(error);
    }
  });
}

const handleCreateRole = data => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const { name, code } = data;
        if (code && name) {
          const roleNameExit = await Role.findOne({ name: name }).exec();

          if (roleNameExit) {
            resolve({ error: 3, message: "name role is already..." });
          } else {
            const roleCodeExit = await Role.findOne({ code: code }).exec();

            if (roleCodeExit) {
              resolve({ error: 4, message: "code role is already..." });
            } else {
              const role = new Role({
                name: name,
                code: code,
                keyMap: 'ROLE'
              });

              await role.save();

              resolve({ error: 0, message: 'Role saved successfully!!!' });
            }
          }
        } else {
          resolve({ error: 2, message: 'missing name or code' })
        }
      } else {
        resolve({ error: 1, message: 'missing parameter!' });
      }
    } catch (error) {
      reject(error);
    }
  });
}

const handleUpdateRole = (data, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id && data) {
        const role = await Role.findById(id);

        if (!role)
          resolve({ error: 2, message: 'Role not found' });
        else {

          const { name, code } = data; // get input client

          const { name: nameRole, code: codeRole } = role._doc; // get datatabase

          if (nameRole === name) {
            if (code === codeRole)
              resolve({ error: 0, message: 'Update role 1 successfully!!!' });
            else {
              const roleCheckCode = await Role.findOne({ code: code });

              if (roleCheckCode)
                resolve({ error: 4, message: "code 1 role is already..."});
              else {
                await Role.findByIdAndUpdate(id, { $set: data });
                resolve({ error: 0, message: 'Update role 2 successfully!!!' });
              }
            }

          } else {
            const roleCheckExit = await Role.findOne({ name: name });

            if (roleCheckExit)
              resolve({ error: 3, message: "name role is already..."});
            else {
              if (code === codeRole) {
                await Role.findByIdAndUpdate(id, { $set: data });
                resolve({ error: 0, message: 'Update role 3 successfully!!!' })
              } else {
                const roleCheckCode = await Role.findOne({ code: code });

                if (roleCheckCode)
                  resolve({ error: 4, message: "code 2 role is already..."});
                else {
                  await Role.findByIdAndUpdate(id, { $set: data });
                  resolve({ error: 0, message: 'Update role 4 successfully!!!' });
                }
              }
            }
          }
        }

      } else {
        resolve({ error: 1, message: "Missing parameter..." });
      }
    } catch (error) {
      reject(error);
    }
  })
}

const handleDeleteRole = id => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        const role = await Role.findByIdAndDelete(id);
        !role && resolve({ error: 2, message: 'Role not found' });
        resolve({ error: 0, message: 'Delete role successfully' });
      } else {
        resolve({ error: 1, message: "Missing parameter..." });
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  handleGetRole,
  handleCreateRole,
  handleUpdateRole,
  handleDeleteRole,
}