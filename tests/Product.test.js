let Product = require("../src/js/Product");

//Confirm that the constructor parameters correctly set three properties on the class, apples and oranges. (Write two test cases with different values.)
describe("Product", () => {
  test("Confirm that the constructor parameters correctly set three properties on the class", () =>{
    //Arrange
    let apples = new Product ("apples", 3, true)
    //Assert
    expect(apples).toEqual({name: "apples", price: 3, taxable: true});
  });
});

describe("Product", () => {
  test("Confirm that the constructor parameters correctly set three properties on the class", () =>{
    //Arrange
    let oranges= new Product ("oranges", 1, false)
    //Assert
    expect(oranges).toEqual({name: "oranges", price: 1, taxable: false});
  });
});

//Given a Product with taxable true, getPriceWithTax returns the price + 10%. Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different prices.)
describe("Product", () => {
  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%.", () =>{
    //Arrange
    let toys= new Product ("toys", 15, true)
    //Assert
    expect(toys.getPriceWithTax()).toBeCloseTo(16.5);
  });
});

describe("Product", () => {
  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%.", () =>{
    //Arrange
    let barbies= new Product ("barbies", 25, true)
    //Assert
    expect(barbies.getPriceWithTax()).toBeCloseTo(27.5);
  });
});

//Given a Product with taxable false, getPriceWithTax returns just the price. (Write two test cases with different prices.)
describe("Product", () => {
  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () =>{
    //Arrange
    let americanGirl= new Product ("americanGirl", 155, false)
    //Assert
    expect(americanGirl.getPriceWithTax()).toEqual(155);
  });
});

describe("Product", () => {
  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () =>{
    //Arrange
    let bratz= new Product ("bratz", 30, false)
    //Assert
    expect(bratz.getPriceWithTax()).toEqual(30);
  });
});