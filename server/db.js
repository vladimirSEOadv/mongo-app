const { MongoClient } = require("mongodb");

const dataBaseName = "productsDatabase";
const login = "admin";
const password = "XisFUu9AY99Gsue9";

const URL = `mongodb+srv://${login}:${password}@cluster0.zabejws.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;

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
