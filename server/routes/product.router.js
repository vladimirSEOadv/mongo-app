const express = require("express");
const { COLLECTION } = require("../constant/constant");
const {getProducts, createProduct, deleteProduct, findProductById, patchProduct} = require('../controllers/product.controller')

const router = express.Router()
// Встроенный в express конструктор позволяющий заменить app к которому обращались эндпоинты когда были в файле server.js.
// Это позволило вынести их в отдельный файл
// Чтобы все работало в основном файле его необходимо подключить при помощи app.use(Название роутера)

router.post(`/${COLLECTION}`, createProduct);
router.get(`/${COLLECTION}`, getProducts);
router.get(`/${COLLECTION}/:id`, findProductById);
router.patch(`/${COLLECTION}/:id`, patchProduct);
router.delete(`/${COLLECTION}/:id`, deleteProduct);

module.exports = router;