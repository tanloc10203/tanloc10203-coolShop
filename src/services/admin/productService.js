import Product from "../../models/Product";

let handleGetProduct = (page, limit, deleteQuery) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        let newPage = parseInt(page);
        let newLimit = parseInt(limit);

        newPage = newPage < 1 ? 1 : newPage;

        !newPage &&
          resolve({ error: 2, message: "GET product failed", data: [] });
        !newLimit &&
          resolve({ error: 3, message: "GET product failed", data: [] });

        const skip = (newPage - 1) * newLimit;

        const products = await Product.find({ delete: !deleteQuery ? false : true })
          .populate("category_id")
          .skip(skip)
          .limit(newLimit)
          .exec();

        let count = await Product.countDocuments({ delete: !deleteQuery ? false : true });

        const totalPage = Math.ceil(count / newLimit);

        resolve({
          error: 0,
          message: "GET product success!!!",
          data: products,
          totalPage,
        });
      } else {
        let products = await Product.find({ delete: !deleteQuery ? false : true }).populate(
          "category_id"
        );
        !products && resolve({ error: 1, message: "GET product failed" });
        resolve({
          error: 0,
          message: "Get Product successfully!!!",
          data: products,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetProductById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        let product = await Product.findById(id);
        !product && resolve({ error: 2, message: "Product not found" });
        resolve({
          error: 0,
          message: "Get product successfully!!!",
          data: product,
        });
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (e) {
      reject(e);
    }
  });
};

let handleCreateProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && data.name && data.price) {
        console.log("check data", data)
        const findProduct = await Product.findOne({
          name: data.name,
          key_product: data.key_product,
          delete: false,
        }).exec();

        if (findProduct) {
          resolve({ error: 3, message: "Sản phẩm đã tồn tại" });
        } else {
          let product = new Product({
            name: data.name,
            price: data.price,
            key_product: data.key_product,
            delete: false,
            ...data,
          });
          await product.save();
          resolve({
            error: 0,
            message: "Create product successfully!!!",
            data: product,
          });
        }
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

let handleUpdateProduct = (id, data, recover) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!recover) {
        if (data && id) {
          const findProduct = await Product.findOne({
            _id: id,
            delete: false,
          }).exec();

          const { name, key_product } = findProduct._doc;
          let updateProduct = null;

          if (data.name === name && data.key_product === key_product) {
            updateProduct = await Product.findByIdAndUpdate(
              id,
              { $set: data },
              { new: true }
            ).exec();
          } else {
            const findProductExit = await Product.findOne({
              name: data.name,
              key_product: data.key_product,
              delete: false,
            }).exec();

            if (findProductExit)
              resolve({ error: 4, message: "Sản phẩm này đã tồn tại." });
            else {
              updateProduct = await Product.findByIdAndUpdate(
                id,
                { $set: data },
                { new: true }
              ).exec();
            }
          }

          !updateProduct &&
            resolve({ error: 3, message: "Không tìm thấy sản phẩm..." });
          resolve({
            error: 0,
            message: "Update Success!!!",
            data: updateProduct,
          });

        } else resolve({ error: 1, message: "Missing parameter..." });
      } else {
        const updateProduct = await Product.findByIdAndUpdate(
          id,
          { delete: false },
          { new: true }
        ).exec();

        updateProduct && resolve({ error: 0, message: "Update success!!!" });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let handleDeleteProduct = (id, deleteQuery) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        let deleteProduct = null;
        if (!deleteQuery) {
          deleteProduct = await Product.findByIdAndUpdate(
            id,
            { delete: true },
            { new: true }
          );
        } else
          deleteProduct = await Product.findByIdAndDelete(id).exec();
        !deleteProduct &&
          resolve({ error: 2, message: "Product not found..." });
        resolve({ error: 0, message: "Delete Success!!!" });
      } else resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleGetProduct,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
