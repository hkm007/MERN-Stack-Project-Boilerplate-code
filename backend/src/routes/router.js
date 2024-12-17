const { veggiesRouter } = require("./veggiesRoute");
const express = require("express");
const apiRouter = express.Router();

apiRouter.use("/veggies", veggiesRouter);

module.exports = apiRouter;
