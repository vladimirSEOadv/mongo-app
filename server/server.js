const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
const { json } = require("express");

const PORT = 3001;
const COLLECTION = "products";
const app = express();
app.use(express.json()); // Мидлвар позволяющий читать данные из body запроса к серверу

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err
        ? console.log("err", err)
        : console.log(
            `
Server started on port: ${PORT} 
Full path to database:
http://localhost:${PORT}/${COLLECTION}`
          );
    });
    db = getDb();
  } else {
    console.log(`Mongo db connection error: ${err}`);
  }
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

// Роут принимает два аргумента. Путь к коллекции и колбек
app.get(`/${COLLECTION}`, (req, res) => {
  const productsData = [];
  db.collection(COLLECTION)
    .find() // cursor - has next, forEach;
    .forEach((product) => productsData.push(product))
    .then(() => {
      res.status(200).json(productsData);
    })
    .catch(() => handleError(res, "Something wrong"));
});

// app.get(`/${COLLECTION}`, (req, res) => {});

app.get(`/${COLLECTION}/:id`, (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection(COLLECTION)
      .findOne({ _id: new ObjectId(req.params.id) }) // findOne для получения одного элемента. ObjectId специальная обертка из Mongo
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => handleError(res, "Something wrong"));
  } else {
    handleError(res, "Wrong id");
  }
});

app.delete(`/${COLLECTION}/:id`, (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection(COLLECTION)
      .deleteOne({ _id: new ObjectId(req.params.id) }) // findOne для получения одного элемента. ObjectId специальная обертка из Mongo
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something wrong"));
  } else {
    handleError(res, "Wrong id");
  }
});
