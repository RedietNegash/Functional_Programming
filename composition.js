




const deductTaxes = (grossSalary) => grossSalary * 0.8;
const addBonus = (grossSalary) => grossSalary + 500;

const netSalary = addBonus(deductTaxes(2000));
