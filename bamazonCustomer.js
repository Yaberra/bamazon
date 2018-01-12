  var mysql = require("mysql");
  var inquirer = require("inquirer");
  var table = require("console.table");
  var connection = mysql.createConnection({

      host: "localhost",
      port: 3306,

      // Your username
      user: "root",

      // Your password
      password: "",
      database: "bamazon"

  });

  // connect to the mysql server and sql database
  connection.connect(function(err) {
      if (err) throw err;
      // run the start function after the connection is made to prompt the user
      queryAllProducts();
      // buyProduct();
  });


  // Include the ids, names, and prices of products for sale.

  function queryAllProducts() {
      console.log("Displaying all products")

      connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;

          console.table(res);

          // First display all of the items available for sale.  

          inquirer
              .prompt([

                  {
                      name: "choices",
                      type: "input",
                      productChoices: function() {
                          var productArray = [];
                          for (var i = 0; i < res.length; i++) {
                              productArray.push(res[i].item_id);
                          }
                          return productArray;
                      },

                      message: "What is the product item id you want to buy?"
                  },

                  {
                      name: "customerQuantityRequired",
                      type: "input",
                      message: "How many do you want to buy?"
                  },

              ])

              .then(function(answer) {
                  // get the information of the chosen item
                  var chosenItem;
                  // console.log("answer:", typeof answer.choices);
                  for (var i = 0; i < res.length; i++) {
                      // console.log("item_id", typeof res[i].item_id);
                      if (res[i].item_id === parseInt(answer.choices)) {
                          chosenItem = res[i];


                      }
                  };

                  console.table(chosenItem);

                  if (chosenItem.stock_quantity >= parseInt(answer.customerQuantityRequired)) {
                      var newStockQuantity = function(numOne, numTwo) {
                          var subtract = numOne - numTwo;
                           
                          // console.log(subtract, multiply);
                          connection.query(
                              //Update the SQL database to reflect the remaining quantity.
                              "UPDATE products SET ? WHERE ?",

                              [{
                                      stock_quantity: subtract
                                  },

                                  {
                                      item_id: chosenItem.item_id
                                  },


                              ],



                              function(error, res) {
                                  if (error) throw err;
                                  console.log("Order placed successfully!");
                                  queryAllProducts();


                              }
                          )
                      }
                      newStockQuantity(chosenItem.stock_quantity, answer.customerQuantityRequired);


                      // // Modify the products table so that there's a product_sales column  value is updated with each individual products total revenue from each sale 
                      // // So when a customer purchases anything from the store, the price of the product is multiplied by the quantity purchased and added to the product's product_sales column.

                      var productSales = function(numOne, numTwo) {
                          var multiply = numOne * numTwo;
                          // console.log(multiply);
                          connection.query(
                              //Update the SQL database to reflect the remaining quantity.
                              "UPDATE products SET ? WHERE ?",

                              [{
                                      product_sales: multiply
                                  },

                                  {
                                      item_id: chosenItem.item_id
                                  },
                              ], function(error, res) {
                                  if (error) {
                                    console.log(error)
                                    throw err
                                  } else{
                                    console.log("Order placed successfully!");
                                  updateProducts();
                                  }
                                  
                                 }
                            )
                      }

                      productSales(chosenItem.price, answer.customerQuantityRequired);


                      function updateProducts() {
                          console.log("Updating products");

                          connection.query("SELECT * FROM products", function(err, res) {
                                  if (err) throw err;

                              })

                          }


                  } else {

                      console.log("Insufficient quantity!");
                      queryAllProducts()

                  }

              })
      });

  }