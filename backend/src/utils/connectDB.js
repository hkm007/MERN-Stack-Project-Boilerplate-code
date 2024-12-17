const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017?dbName=merndb")
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log(err));
}

module.exports = {
  connectDB,
};
