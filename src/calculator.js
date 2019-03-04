const relief = require("./relief/relief");
const taxation = require("./tax/taxation");

function calculator(incomeType, amount, status) {
  let income = amount;
  if (typeof amount === "string") {
    income = Number.parseInt(income);
  }

  let annualIncome = income;
  if (incomeType === "Monthly") annualIncome = income * 12;

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
