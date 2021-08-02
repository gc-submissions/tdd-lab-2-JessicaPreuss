"use strict";
const formatCurrency = (amount) => {
let abs = Math.abs(amount).toFixed(2);
    return amount >= 0 ? "$" + abs : "-$" + abs;
}

module.exports = formatCurrency;