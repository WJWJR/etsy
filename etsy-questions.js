//Calculate the average price of all items.

console.log(data);



//function priceMean() {
  //return.length
//}

function findingTheMean() {

  //let pricesArray = data.map(function(items){return items.price;});
let pricesArray = data.map(items => items.price);
  console.log(pricesArray);
  var sum = pricesArray.reduce(function(acc, val) {
    return acc + val;
  });
  console.log(sum)
  let average = sum / pricesArray.length;
  console.log(average.toFixed(2))
}
findingTheMean();

//Get an array of items that cost between $14.00 and $18.00 USD
//let teens = data.filter(object => object.age > 12 && object.age < 20); .map

//Look at .price that == $14.00 and $18.00


//Which item has a "GBP" currency code? Display its name and price.

//I am gonna want to look at .currency_code


//Display a list of all items which are made of wood.

//Look at .materials I will need to figure the Array.prototype.indexOf() of the array.


//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

//Look at .material that length = [9]




//How many items were made by their sellers?
