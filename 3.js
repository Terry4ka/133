let calculateSalary = function (badsalary) {
  let cleansalary = 0.35;
  if (badsalary >= 100000) {
    cleansalary = 0.45;
  }
  let netSalary = badsalary * (1 - cleansalary);
  return Math.round(netSalary);
};
console.log(calculateSalary(80000));
console.log(calculateSalary(120000));