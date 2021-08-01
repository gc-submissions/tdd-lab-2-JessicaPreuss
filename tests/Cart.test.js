const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product")

describe("Cart", () => {
  test("Confirm that the constructor correctly sets the items property to an empty array. ", () => {
    //Arrange
    let myCart = new Cart();
    //Act

    //Assert
    expect(myCart.items).toEqual([]);
  });

  test( "Calling add once adds one product to the items array. Make sure the correct product object was added.",()=>{
  //Arrange
  let myCart = new Cart();
  let book = new Product("book", 10, true);
  //Act
  myCart.add(book);
  //Assert
  expect(myCart.items.length).toEqual(1);
  expect(myCart.items[0].name).toBe("book");
  
})
{
  //Arrange
    let myCart = new Cart();
    let razor = new Product("razor", 5, true);
    let shavingCream = new Product("shavingCream", 3, true);
  //Act
  myCart.add(razor);
  myCart.add(shavingCream);
  //Assert 

  test("Calling add twice leaves a total of two Products in the items array." , ()=> {
   expect(myCart.items.length).toBe(2);
  })

  test("Make sure the correct product objects were added." , ()=> {
   expect(myCart.items[0]).toEqual({name:"razor", price:5, taxable: true}  );
  })

  test("Make sure the correct product objects were added." , ()=> {
   expect(myCart.items[1]).toEqual({name:"shavingCream", price:3, taxable: true});
  })

  test("getItemCount returns the length of the items array." , ()=>{
    expect(myCart.getItemCount()).toEqual(2);
  })
}
{
  //Arrange
  let myCart = new Cart();
  let toothBrush = new Product("toothBrush", 30, true);
  let toothPaste = new Product("toothPaste", 3, true);
  let mouthWash = new Product("mouthWash", 5, true);
  let floss = new Product("floss", 1, true);

  //Act
  myCart.add(toothBrush);
  myCart.add(toothPaste);
  myCart.add(mouthWash);
  myCart.add(floss);

  //Assert 
  test( "getItemCount returns the length of the items array.", ()=> {    
      expect(myCart.getItemCount()).toEqual(4);
    })
   test( "getTotalBeforeTax returns the sum of the price of all Products in the items array.", ()=> {
      expect(myCart.getTotalBeforeTax()).toEqual(39);
    })
    test("getTotalBeforeTax returns the sum of the price of all Products in the items array." , ()=> {
      //Arrange
      let candyBar = new Product("candyBar", 1, false);
      let kitKat = new Product("KitKat", 1, false);
      //Act
      myCart.add(mouthWash);
      //Assert
      expect(myCart.getTotalBeforeTax()).toEqual(44);
    })

    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array." , ()=> {
      expect(myCart.getTotalWithTax()).toBeCloseTo(48.4);
    })
    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array." , ()=> {
      //Arrange
      let candyBar = new Product("candyBar", 1, false);
      let kitKat = new Product("KitKat", 1, false);
      //Act
      myCart.add(mouthWash);
      //Assert
      expect(myCart.getTotalWithTax()).toBeCloseTo(53.9);
    })
    test( "getTax returns the difference between getTotalWithTax and getTotalBeforeTax.", ()=>{
      expect(myCart.getTax()).toBeCloseTo(4.9);
    })
    test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax." , ()=> {
      //Arrange
      let candyBar = new Product("candyBar", 1, false);
      let kitKat = new Product("KitKat", 1, false);
      //Act
      myCart.add(mouthWash);
      //Assert
      expect(myCart.getTax()).toBeCloseTo(5.4);
    })
  }


});





//make the module.export into an object { function, function}
//const {function, function} = require(..//)