const express = require("express");
const path = require("path");
const cors = require('cors');
const apiRouter = require("./src/routes/router");
const { connectDB } = require("./src/utils/connectDB");

const app = express();

// connect DB
connectDB();

app.use(cors());
app.use(express.json());
  
// static content
app.use(express.static(path.join(__dirname, "./src/ui")));

// api routes
app.use("/api", apiRouter); 

// frontend route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/ui", "index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App running at port: ${PORT}...`));
