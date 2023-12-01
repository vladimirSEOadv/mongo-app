const express = require("express");
const mongoose = require("mongoose");
const showServerStartMessage = require("./utils/showServerStartMessage");
const { PORT, URL } = require("./constant/constant");
const productRouter = require('./routes/product.router');

const app = express();
// Мидлвар позволяющий читать данные из body запроса к серверу
app.use(express.json());
app.use(productRouter); // Подключение роутера с эндпоинтами вынесенного в отдельный файл

mongoose
    .connect(URL) // {useNewUrlParser: true, useUnifiedTopology: true}
    .then(() => {
        showServerStartMessage()
    })
    .catch((err) => console.log("err", err));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});



