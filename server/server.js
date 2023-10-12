const mongoose = require("mongoose");
const express = require("express");
const { json } = require("express");
const { COLLECTION, PORT, URL } = require("./constant/constant");
const Product = require("./models/products");
console.log("URL", URL);

const app = express();
// Мидлвар позволяющий читать данные из body запроса к серверу
app.use(express.json());

mongoose
    .connect(URL)
    .then(() => {
        console.log(`
Server started on port: ${PORT}
Full path to database:
http://localhost:${PORT}/${COLLECTION}`
        );
    })
    .catch((err) => console.log("err", err));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

// Роут принимает два аргумента. Путь к коллекции и колбек
app.get(`/${COLLECTION}`, (req, res) => {
  Product.find() // cursor - has next, forEach;
    .then((products) => {
      res.status(200).json(products);
    })
    .catch(() => handleError(res, "Something wrong"));
});

app.get(`/${COLLECTION}/:id`, (req, res) => {
    Product.findOne({ _id: req.params.id }) // findOne для получения одного элемента.
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => handleError(res, "Something wrong"));
});

app.delete(`/${COLLECTION}/:id`, (req, res) => {
    Product.deleteOne({ _id: req.params.id }) // findOne для получения одного элемента.
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something wrong"));
});

// app.post(`/${COLLECTION}`, (req, res) => {
//   Product.insertOne(req.body)
//     .then((result) =>
//       res
//         .status(201) // 201 статус означающий успешное добавление
//         .json(result)
//     )
//     .catch(() => handleError(res, "Something wrong"));
// });
//
// app.patch(`/${COLLECTION}/:id`, (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     Product.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body }) // findOne для получения одного элемента. ObjectId специальная обертка из Mongo
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch(() => handleError(res, "Something wrong"));
//   } else {
//     handleError(res, "Wrong id");
//   }
// });
