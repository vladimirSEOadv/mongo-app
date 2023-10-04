const express = require("express");
const { connectToDb, getDb } = require("./db");

const PORT = 3001;
const collectionName = "products";
const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err
        ? console.log("err", err)
        : console.log(
            `\n\nserver started on port: ${PORT} \n\nfull path to database: \nhttp://localhost:${PORT}/${collectionName}`
          );
    });
    db = getDb();
  } else {
    console.log(`Mongo db connection error: ${err}`);
  }
});
