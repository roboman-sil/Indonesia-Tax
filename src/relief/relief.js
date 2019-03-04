const reliefSchema = require("../../schemas/reliefSchema");

function relief(status) {
  const result = reliefSchema[status];

  if (!result) {
    return 0;
  }
  return result;
}

module.exports = relief;
