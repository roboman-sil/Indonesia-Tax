const taxSchema = require("../../schemas/taxSchema");

function taxation(annualIncome) {
  const taxTiers = Object.keys(taxSchema);
  const taxRates = Object.values(taxSchema);

  let tierIndex = 0;
  for (let [index, tier] of taxTiers.entries()) {
    const tierAmount = parseInt(tier);

    if (annualIncome <= tierAmount) {
      tierIndex = index - 1;
      break;
    }

    if (index === taxTiers.length - 1) {
      tierIndex = index;
    }
  }

  let annualIncomeTax = 0;
  let variable = annualIncome;
  for (let i = 0; i <= tierIndex; i += 1) {
    if (i === tierIndex) {
      annualIncomeTax += (variable / 100) * taxRates[i];
      break;
    }

    const tierDifference = parseInt(taxTiers[i + 1]) - parseInt(taxTiers[i]);
    variable -= tierDifference;
    annualIncomeTax += (tierDifference / 100) * taxRates[i];
  }

  return annualIncomeTax;
}

module.exports = taxation;
