"use strict";
const formatCurrency = (amount) => {
let abs = Math.abs(amount).toFixed(2);
    return amount >= 0 ? "$" + abs : "-$" + abs;
}

const getCoins = (cents) => {
    let change = cents;
//how many quarters is that?; Divide how much money we have by 25; Then, how much do we have left?; Do this for other coins 
    let quarters = Math.floor(change / 25);
    change -= quarters * 25

    let dimes = Math.floor(change / 10);
    change -= dimes * 10

    let nickles = Math.floor(change / 5);
    change -= nickles * 5

    let pennies = change;

    return {
      quarters: quarters,
      dimes: dimes,
      nickels: nickles,
      pennies: pennies

    }

}

module.exports = {formatCurrency, getCoins} ;
