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
     start();

 });

 function start() {
     inquirer
         .prompt([

             {
                 name: "choices",
                 type: "list",
                 message: "What would you like to do?",

                 choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],


             }

         ])

         .then(function(answer) {

                 // selects `View Low Inventory`, then it should list all items with an inventory count lower than five
                 if (answer.choices === "View Products for Sale") {
                     connection.query("SELECT * FROM products", function(err, res) {
                         if (err) throw err;
                         console.table(res);
                         start();

                     })

                 } else if (answer.choices === "View Low Inventory") {
                     connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
                         if (err) throw err;
                         console.table(res);
                         start();

                     })

                 } else if (answer.choices === "Add to Inventory") {
                     updateProducts();


                 } else if (answer.choice === "Add New Product") {
                     addProducts();


                 }

             })

         }

 // selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

 function updateProducts() {
     console.log("Updating products");

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

                     message: "What is the product item id you want to update?"
                 },

                 {
                     name: "managerQuantityUpdate",
                     type: "input",
                     message: "How many are you adding?"
                 },

             ])

             .then(function(answer) {
                 // get the information of the chosen item to be updated
                 var chosenItem;
                 // console.log("answer:", typeof answer.choices);
                 for (var i = 0; i < res.length; i++) {
                     // console.log("item_id", typeof res[i].item_id);
                     if (res[i].item_id === parseInt(answer.choices)) {
                         chosenItem = res[i];


                     }
                 };

                 console.table(chosenItem);

                 var newStockQuantity = function(numOne, numTwo) {
                     var sum = numOne + numTwo;
                     // console.log(subtract);
                     connection.query(
                         //Update the SQL database to reflect the additional quantity.
                         "UPDATE products SET ? WHERE ?",

                         [{
                                 stock_quantity: sum
                             },

                             {
                                 item_id: chosenItem.item_id
                             },
                         ],


                         function(error, res) {
                             if (error) throw err;
                             console.log("Product updated!");
                             start()

                         }
                     )
                 }
                 newStockQuantity(chosenItem.stock_quantity, answer.managerQuantityUpdate);


             });


     });

 }

 // selects `Add New Product`, it should allow the manager to add a completely new product to the store  

 function addProducts() {
     console.log("Add New Product...\n");
     var query = connection.query(
         "INSERT INTO products SET ?", {
             
             	item_id: ""

                 product_name: ""

                 department_name: ""

                 price: ""

                 stock_quantity: ""
                      },
         function(err, res) {
             console.log(res.affectedRows + " product inserted!\n");
             // Call updateProduct AFTER the INSERT completes
             updateProducts();
         }
     );


     


 };