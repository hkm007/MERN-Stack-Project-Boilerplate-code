const { getAllVeggiesFromDb } = require("../dao/veggiesDao");

function getAllVeggiesFromService() {
  return getAllVeggiesFromDb();
}

module.exports = {
  getAllVeggiesFromService,
};
