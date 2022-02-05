import Category from "../../models/Category";

let handleCreateCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && data.name) {
        let category = await Category.findOne({ name: data.name });
        category && resolve({ error: 4, message: "Category is exits..." });
        let newCategory = new Category({ name: data.name, delete: false });
        await newCategory.save();
        resolve({ error: 0, message: "Category created successfully" });
      } else resolve({ error: 3, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetCategory = (limit, page) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        let newLimit = parseInt(limit);
        let newPage = parseInt(page);

        newPage = newPage < 1 ? 1 : newPage;

        !newLimit &&
          resolve({ error: 3, message: "Limit data type is incorrect..." });
        !newPage &&
          resolve({ error: 4, message: "page data type is incorrect..." });

        let skip = (newPage - 1) * newLimit;

        let category = await Category.find({ delete: false })
          .skip(skip)
          .limit(newLimit)
          .exec();

        let count = await Category.countDocuments({ delete: false });

        let total = Math.ceil(count / newLimit);

        !category &&
          resolve({ error: 5, message: "Get categories failed", data: [] });
        resolve({
          error: 0,
          message: "Get categories success",
          data: category,
          totalCategory: count,
          totalPage: total,
        });
      } else {
        let category = await Category.find({ delete: false });
        resolve({
          error: 0,
          message: "Get categories success",
          data: category,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let handleUpdateCategory = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(id, data);
      if (id && data && data.name) {
        let category = await Category.findById(id).exec();
        const { name } = category._doc;
        let doc = null;
        if (data.name === name) {
          doc = await Category.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true }
          );
        } else {
          const cat = await Category.findOne({ name: data.name }).exec();
          if (cat) {
            resolve({ error: 3, message: "Name role is already..." });
          } else {
            doc = await Category.findByIdAndUpdate(
              id,
              { $set: data },
              { new: true }
            );
          }
        }
        !doc && resolve({ error: 4, message: "Category not found..." });
        resolve({ error: 0, message: "Update Success!!!", doc });
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

let handleDeleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    try {
      if (id) {
        Category.findByIdAndUpdate(id, { delete: true })
          .then((data) => {
            !data && resolve({ error: 4, message: "Category not found..." });
            resolve({ error: 0, message: "Category deleted success!!!" });
          })
          .catch((err) =>
            resolve({ error: err, message: "Category not found..." })
          );
      } else resolve({ error: 3, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleCreateCategory,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory,
};
