import env from "dotenv";

env.config();

export const { DATABASENAME, COLLECTION, LOGIN, PASSWORD, CLUSTER, PORT } =
  process.env;

export const URL = `mongodb+srv://${LOGIN}:${PASSWORD}${CLUSTER}.mongodb.net/${DATABASENAME}?retryWrites=true&w=majority`;
