// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiples = [];
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      multiples.push(number);
    }
  });
  return multiples.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter (fruits, function (fruit, index, collection) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function (fruit, index, collection) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function (dessert, index, collection) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
/*
  I - array of objects - products
  O - the sum of all the products
  C -
  E -

  -- starting value is 0,
*/
var sumTotal = function(products) {
  return _.reduce(products, function (total, item, index, collection) {
    var stringSplit = item.price.split('$');
    var numString = parseFloat(stringSplit[1]);
    return total += numString;
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertObj = {};
  return _.reduce(desserts, function (total, item, index, collection) {
    if (dessertObj[item['type']] === undefined) {
      dessertObj[item['type']] = 1;
    } else {
      dessertObj[item['type']]++;
    }
    return dessertObj;
  }, 0);

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce (movies, function (total, item, index, collection) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      total.push(item.title);
    }
    return total;
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce (movies, function (total, item, index, collection) {
    if (item.runtime < timeLimit) {
      total = true;
    }
    return total;
  }, false);

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function (item, index, collection) {
    return item.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function (item, index, collection) {
    if (item.ingredients.indexOf('flour') === -1) {
      item.glutenFree = true;
    } else {
      item.glutenFree = false;
    }
    return item;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function (item, index, collection) {
    var minusMoney = item.price.split('$');
    var numericPrice = parseFloat(minusMoney[1]);
    salePrice = numericPrice * (1 - coupon);
    salePrice = salePrice.toFixed(2);
    item.salePrice = '$' + salePrice;
    return item;
  });
};
