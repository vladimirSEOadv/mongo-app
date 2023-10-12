const { MongoClient } = require("mongodb");
require("dotenv").config();
const { URL } = require("./constant/constant");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log("Success connection to db");
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
