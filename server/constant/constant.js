require("dotenv").config();
const { DATABASENAME, COLLECTION, LOGIN, PASSWORD, CLUSTER, PORT } =
  process.env;

const URL = `mongodb+srv://${LOGIN}:${PASSWORD}${CLUSTER}.mongodb.net/${DATABASENAME}?retryWrites=true&w=majority`;

module.exports = {
  DATABASENAME,
  COLLECTION,
  LOGIN,
  PASSWORD,
  CLUSTER,
  PORT,
  URL,
};
