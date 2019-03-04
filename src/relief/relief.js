const reliefSchema = require("../../schemas/reliefSchema");

function relief(status) {
  return reliefSchema[status];
}

module.exports = relief;
