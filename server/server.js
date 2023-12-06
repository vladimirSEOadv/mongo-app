import express from "express";
import mongoose from "mongoose";
import { showServerStartMessage } from "./utils/showServerStartMessage.js";
import { PORT, URL } from "./constant/constant.js";
import productRouter from "./routes/product.router.js";

const app = express();
// Мидлвар позволяющий читать данные из body запроса к серверу
app.use(express.json());
app.use(productRouter); // Подключение роутера с эндпоинтами вынесенного в отдельный файл

mongoose
  .connect(URL) // {useNewUrlParser: true, useUnifiedTopology: true}
  .then(() => {
    showServerStartMessage();
  })
  .catch((err) => console.log("err", err));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
