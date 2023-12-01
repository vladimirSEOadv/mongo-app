const {PORT, COLLECTION} = require("../constant/constant");

const showServerStartMessage = () => {
    console.log(`
Server started on port: ${PORT}
Full path to database:
http://localhost:${PORT}/${COLLECTION}`
    );
}


module.exports = showServerStartMessage