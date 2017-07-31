// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
  var averagePrice = 0;
function question1 () {
  for (var i = 0;  i < data.length ; i++ ) {
    averagePrice = averagePrice + data[i].price ;
    }
    averagePrice = averagePrice / data.length ;
    averagePrice = Math.round(averagePrice * 100) / 100 ;
    console.log (averagePrice) ;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2 () {
  var bookArray = [];
  for ( var i = 0; i < data.length ; i++ ) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      bookArray.push (data[i].title) ;
    }
  }
  console.log (bookArray) ;

}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (var i = 0; i < data.length; i++) {
    if (data [i].currency_code == "GBP") {
      console.log (data[i].title + " costs " + data[i].price + " pounds ") ;
    }
  }
}


// 4: Display a list of all items who are made of wood. (returning title)
function question4 () {
  var woodItems = [];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].materials)
    for (var j = 0; j < data[i].materials.length; j++ ) {
      if (data[i].materials[j] === "wood") {
        //console.log(data[i].materials[j])
        //console.log(data[i]);
        woodItems.push(data[i]);
      }
    }
  }
  console.log(woodItems);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

  for (var i=0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      var itemList = [];
      for (var j = 0; j < data[i].materials.length; j++) {
        itemList.push(data[i].materials[j])
      }
    // console.log(data[i])
    console.log(data[i].title + " " + data[i].materials.length + " " + "items:" + " " + itemList)
    }

  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  var total = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      total = total + 1
    }
  }
  console.log("Number of items made by seller is: " + total)
}
