const express = require("express");
const { getVeggies } = require("../controllers/veggiesController");
const router = express.Router();

router.get("/", getVeggies);

module.exports = {
  veggiesRouter: router,
};
