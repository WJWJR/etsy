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
let costArray = data.filter(object => object.price >= 14.00 && object.price <= 18.00).map(items =>[items.title, items.price]);
  console.log(costArray);

//Look at .price that == $14.00 and $18.00


//3.Which item has a "GBP" currency code? Display its name and price.
let currencyCode = data.filter(item => item.name && item.price);
console.log(currencyCode)

//I am gonna want to look at .currency_code


//4.Display a list of all items which are made of wood.
//use filter  and includes
let woodObjects = data.filter(item => item.materials.includes('wood'))
  console.log(woodObjects);

//Look at .materials I will need to figure the Array.prototype.indexOf() of the array.


//5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

let manyMaterials = data.filter( item => item.materials.length >= 8 ).map(item => [item.title, item.materials.length, item.materials]);
  console.log(manyMaterials)



//6. How many items were made by their sellers?
let sellerItems = data.filter( item => item.who_made === 'i_did')
console.log(sellerItems.length);




/*===========================================================================*/

//how many males were there in America in 2010?
// data.reduce((total, object) => total + object.males);
// console.log('there were', totalMales, 'males in 2010');
