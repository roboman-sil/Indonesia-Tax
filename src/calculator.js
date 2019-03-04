const relief = require("./relief/relief");
const taxation = require("./tax/taxation");

function calculator(incomeType, amount, status) {
  let annualIncome = amount;
  if (incomeType === "Monthly") annualIncome = amount * 12;

  const taxRelief = relief(status);

  const annualTaxableIncome = annualIncome - taxRelief;

  const annualIncomeTax = taxation(annualTaxableIncome);

  return {
    "Annual Income": annualIncome,
    "Tax Relief": taxRelief,
    "Annual Taxable Income": annualTaxableIncome,
    "Annual Income Tax": annualIncomeTax
  };
}

module.exports = calculator;
