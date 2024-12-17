const { getAllVeggiesFromService } = require("../services/veggiesService");

function getVeggies(req, res) {
  let veggies = getAllVeggiesFromService();
  res.status(200).json({ data: veggies });
}

module.exports = {
  getVeggies,
};
