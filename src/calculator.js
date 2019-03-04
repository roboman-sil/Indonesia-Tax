function calculator(incomeType, amount) {
  let annualIncome = amount;
  if (incomeType === "Monthly") annualIncome = amount * 12;

  return {
    "Annual Income": annualIncome,
    "Tax Relief": "",
    "Annual Taxable Income": "",
    "Annual Income Tax": ""
  };
}

module.exports = calculator;
