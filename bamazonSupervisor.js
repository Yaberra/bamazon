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

 // Running this application will list a set of menu options:

 // View Product Sales by Department

 //Create New Department

 function start() {
     inquirer
         .prompt([

             {
                 name: "choices",
                 type: "list",
                 message: "What would you like to do?",

                 choices: ["View Product Sales by Department", "Create New Department"],


             }

         ])

 }

 .then(function(answer) {

             // When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

             // | department_id | department_name | over_head_costs | product_sales | total_profit |
             // | ------------- | --------------- | --------------- | ------------- | ------------ |
             // | 01            | Electronics     | 10000           | 20000         | 10000        |
             // | 02            | Clothing        | 60000           | 100000        | 40000        |



             if (answer.choices === "View Products for Sale") {

                 connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs FROM departments INNER JOIN products ON departments.product_sales = products. product_sales", function(err, res) {
                     if (err) throw err;
                     console.table(res);
                     start();

                 })


                 // The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

                 connection.query("SELECT products.product_sales - department. over_head_costs AS [total_profit] WHERE departments.product_sales = product.product_sales", function(err, result) {
                     if (err) throw err;
                     console.table(res);
                     start();

                 })

             } else(answer.choices === "Create New Department") {

                 function newDepartment() {
                     console.log("Add New Product...\n");
                     var query = connection.query(
                         "INSERT INTO products SET ?", {

                             department_id: ""

                             department_name: ""

                             over_ head_cost: ""


                         },

                         function(err, res) {
                             console.log(res.affectedRows + " department inserted!\n");
                             // Call updateDepartment AFTER the INSERT completes
                             updateDepartment();
                         }
                     );

                 }

                 start();
             }



             c