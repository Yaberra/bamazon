 var mysql = require("mysql");
 var inquirer = require("inquirer");
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

 // selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

 function queryAllProducts() {
     console.log("Displaying all products")

     connection.query("SELECT * FROM products", function(err, res) {
                 if (err) throw err;

                 console.log(res);
              }

          };



                 // selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

                 // selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

                 // selects `Add New Product`, it should allow the manager to add a completely new product to the store.