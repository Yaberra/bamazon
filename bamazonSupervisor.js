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

                 choices: ["View Product Sales by Department", "Create New Department"],


             }

         ])
 }

//  .then(function(answer) {

//              if (answer.choices === "View Product Sales by Department") {
//                  connection.query("", function(err, res) {
//                      if (err) throw err;
//                      console.table(res);
//                      start()

//                  })
//              } else if (answer.choices === "Create New Department") {
//              	addDepartment();
                 
//              }

//              function addDepartment() {

//                  inquirer
//                      .prompt([


//                          {
//                              name: "department_name",
//                              type: "input",
//                              message: "What is the department name?"
//                          },

//                          {
//                              name: "over_head_costs",
//                              type: "input",
//                              message: "What are the over head costs?"

//                          },

//                          {
//                              name: "",
//                              type: "input",
//                              message: "What is the?"

//                          },


//                      ]).then(function(result, err) {
//                              if (err) {
//                                  console.log(err);
//                              }

//                              console.log(result)
//                              console.log("Adding Department...\n");
//                              var query = connection.query(
//                                  "INSERT INTO products SET ?",
//                                  result,




//                                  function(err, res) {
//                                      console.log(res.affectedRows + " product inserted!\n");
//                                      // Call updateProduct AFTER the INSERT completes
//                                      start();
//                                  }
//                              );

//                          }

//                      )



//              };


// function totalProfit() {
// 	 connection.query("SELECT products.product_sales - department. over_head_costs AS [total_profit] WHERE departments.product_sales = product.product_sales", function(err, result) {
//      if (err) throw err;
//      console.table(res);
//       start();

//      })
// }

