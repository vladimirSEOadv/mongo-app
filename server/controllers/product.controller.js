import { Product } from "../models/products.js";

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getProducts = (req, res) => {
  Product.find()
    // .sort({title: "asc"}) // Сортировка
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => handleError(res, err));
};
const findProductById = (req, res) => {
  Product.findById(req.params.id) // findOne для получения одного элемента.
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => handleError(res, err));
};
const createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((result) =>
      res
        .status(201) // 201 статус означающий успешное добавление
        .json(result)
    )
    .catch((err) => handleError(res, err));
};
const patchProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};
const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

export const productController = {
  get: getProducts,
  findById: findProductById,
  create: createProduct,
  patch: patchProduct,
  delete: deleteProduct,
};
