import { PORT, COLLECTION } from "../constant/constant.js";

export const showServerStartMessage = () => {
  console.log(`
Server started on port: ${PORT}
Full path to database:
http://localhost:${PORT}/${COLLECTION}`);
};
