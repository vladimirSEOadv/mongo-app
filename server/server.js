const express = require("express");
const { connectToDb, getDb } = require("./db");

const PORT = 3001;
const COLLECTION = "products";
const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err
        ? console.log("err", err)
        : console.log(
            `\n\n
            server started on port: ${PORT} 
            \n\n
            full path to database: 
            \n
            http://localhost:${PORT}/${COLLECTION}`
          );
    });
    db = getDb();
  } else {
    console.log(`Mongo db connection error: ${err}`);
  }
});

// Роут принимает два аргумента. Путь к коллекции и колбек
app.get("/" + COLLECTION, (req, res) => {
  const productsData = [];
  db.collection(COLLECTION)
    .find() // cursor - has next, forEach;
    .forEach((product) => productsData.push(product))
    .then(() => {
      res.status(200).json(productsData);
    })
    .catch((err) => {
      res.status(500).json({ error: "Something wrong" });
      console.log("err", err);
    });
});
