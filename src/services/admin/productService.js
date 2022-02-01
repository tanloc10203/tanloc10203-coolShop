import Product from "../../models/Product";

let handleGetProduct = (page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        let newPage = parseInt(page);
        let newLimit = parseInt(limit);

        newPage = newPage < 1 && 1;

        !newPage && resolve({ error: 2, message: "GET product failed", data: [] });
        !newLimit && resolve({ error: 3, message: "GET product failed", data: [] });

        const skip = (newPage - 1) * newLimit;

        let products = await Product.find({ delete: false }).skip(skip).limit(newLimit);
        let count = await Product.countDocuments({ delete: false });

        const totalPage = Math.ceil(count / newLimit);

        resolve({ error: 0, message: "GET product success!!!", data: products, totalPage });
      } else {
        let products = await Product.find({ delete: false });
        !products && resolve({ error: 1, message: "GET product failed" });
        resolve({ error: 0, message: "Get Product successfully!!!", data: products });
      }
    } catch (error) {
      reject(error);
    }
  });
}

let handleGetProductById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        let product = await Product.findById(id);
        !product && resolve({ error: 2, message: 'Product not found' });
        resolve({ error: 0, message: "Get product successfully!!!", data: product });
      } else
        resolve({ error: 1, message: "Missing parameter..." });
    } catch (e) {
      reject(e);
    }
  });
}

let handleCreateProduct = data => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && data.name && data.price) {
        let product = new Product({
          name: data.name,
          price: data.price,
          key_product: data.key_product,
          delete: false,
          ...data
        });
        await product.save();
        resolve({ error: 0, message: "Create product successfully!!!" });
      } else
        resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
}

let handleUpdateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data && id) {
        const updateProduct = await Product.findByIdAndUpdate(id, { $set: data }, { new: true });
        !updateProduct && resolve({ error: 2, message: "Product not found..." });
        resolve({ error: 0, message: "Update Success!!!", updateProduct });
      } else
        resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
}

let handleDeleteProduct = id => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        const deleteProduct = await Product.findByIdAndUpdate(id, { delete: true }, { new: true });
        !deleteProduct && resolve({ error: 2, message: "Product not found..." });
        resolve({ error: 0, message: "Delete Success!!!" });
      } else
        resolve({ error: 1, message: "Missing parameter..." });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  handleGetProduct,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct
};