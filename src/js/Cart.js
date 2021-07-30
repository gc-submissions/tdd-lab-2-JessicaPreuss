"use strict";
class Cart {
    constructor () {
        items: [];
    }
    add(product) {
        this.items.unshift(product);
    }
    getItemCount(){
        return this.items.length;
    }
    getTotalBeforeTax(){
        let total = 0
        for (let i=0; i < this.items.length; i++){
            total += this.items[i].price
        }
        return total;
        
    }
    getTotalWithTax(){
        let total = 0
        for(let i=0; i < this.items.length; i++){
            total += this.items[i].getPriceWithTax();
        }
        return total;
    }
    getTax(){
        return this.getTotalBeforeTax() - this.getTotalWithTax();
    }
}