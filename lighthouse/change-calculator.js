const calculateChange = function(total, cash) {
  let sortingChange = cash - total;
  let change = {};
  let twentyDollar = Math.floor(sortingChange / 2000);
  if (twentyDollar !== 0) {
    change.twentyDollar = twentyDollar;
    sortingChange -= twentyDollar * 2000;
  }
  let tenDollar = Math.floor(sortingChange / 1000);
  if (tenDollar !== 0) {
    change.tenDollar = tenDollar;
    sortingChange -= tenDollar * 1000;
  }
  let fiveDollar = Math.floor(sortingChange / 500);
  if (fiveDollar !== 0) {
    change.fiveDollar = fiveDollar;
    sortingChange -= fiveDollar * 500;
  }
  let twoDollar = Math.floor(sortingChange / 200);
  if (twoDollar !== 0) {
    change.twoDollar = twoDollar;
    sortingChange -= twoDollar * 200;
  }
  let oneDollar = Math.floor(sortingChange / 100);
  if (oneDollar !== 0) {
    change.oneDollar = oneDollar;
    sortingChange -= oneDollar * 100;
  }
  let quarter = Math.floor(sortingChange / 25);
  if (quarter !== 0) {
    change.quarter = quarter;
    sortingChange -= quarter * 25;
  }
  let dime = Math.floor(sortingChange / 10);
  if (dime !== 0) {
    change.dime = dime;
    sortingChange -= dime * 10;
  }
  let nickel = Math.floor(sortingChange / 5);
  if (nickel !== 0) {
    change.nickel = nickel;
    sortingChange -= nickel * 5;
  }
  let penny = Math.floor(sortingChange / 1);
  if (penny !== 0) {
    change.penny = penny;
    sortingChange -= penny;
  }
  return change;


};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
