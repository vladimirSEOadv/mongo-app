// const express = require("express");
import express from "express";
import { COLLECTION } from "../constant/constant.js";
import { productController } from "../controllers/product.controller.js";

const router = express.Router();
// Встроенный в express конструктор позволяющий заменить app к которому обращались эндпоинты когда были в файле server.js.
// Это позволило вынести их в отдельный файл
// Чтобы все работало в основном файле его необходимо подключить при помощи app.use(Название роутера)

router.post(`/${COLLECTION}`, productController.create);
router.get(`/${COLLECTION}`, productController.get);
router.get(`/${COLLECTION}/:id`, productController.findById);
router.patch(`/${COLLECTION}/:id`, productController.patch);
router.delete(`/${COLLECTION}/:id`, productController.delete);

export default router;
