# bamazon

## Customer view 

1. The bamazon app is a database app with a list of products created in MYSQL 

2. The product table carries a list of 10 items organized into columns: 

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

   * product_sale (total revenue from each sale)

 3. Running the application will first display all the products available for sale 
 
 
  4. You will be promoted to two questions:
  * "What is the product item id you want to buy?" 
  * "How many do you want to buy?"

<img width="686" alt="displayitemsandpromot" src="https://user-images.githubusercontent.com/30003973/34857934-83aacd8a-f71b-11e7-9f4c-ca0b4f6f3e47.png">
  5. After you answer the questions an order will be placed for that particularly item

 6. If bamazon has enough of the product to meet the customer's request the item will be displayed including the quantity requested and price. 

 <img width="742" alt="successful order" src="https://user-images.githubusercontent.com/30003973/34858110-66bc1232-f71c-11e7-8181-b0139034948d.png">

 7. You will also see the message "Order placed successfully!"

 8. If the order requested is more than the available quality you'll see the message "Insufficient quantity!".  

 <img width="707" alt="insufficentquantity" src="https://user-images.githubusercontent.com/30003973/34857935-83c1b77a-f71b-11e7-860a-15aee4cd0ff8.png">

 9. when a customer purchases anything from the store, and the order is successful the product_sales column is updated with the  price of the product multiplied by the quantity purchased to provide the total sales in revenue. 

 <img width="720" alt="updatedtableandpromotetostartagain" src="https://user-images.githubusercontent.com/30003973/34857758-85aa81f8-f71a-11e7-97ad-fa3255080ba5.png">

 10. The Start function displays all the products available for sale this time with updated table depending on whether you successfully placed an order or not. 


 ## Manager view 

 1. The manager view displays a list of menu options:   

 * View Products for Sale 
 * View Low Inventory 
 * Add to Inventory 
 * Add New Product 

 <img width="745" alt="listofoptionsmanagerview" src="https://user-images.githubusercontent.com/30003973/34857753-847463d0-f71a-11e7-9ff7-48084eb1fb74.png">

2. If a manager selects 'View Products for Sale' then all the available list of products will be displayed 
<img width="708" alt="viewproductsforsale" src="https://user-images.githubusercontent.com/30003973/34857760-86744006-f71a-11e7-8067-94b2ad175a64.png">

3. If a manager selects 'View Low Inventory' then it will display a list of items with stock quantity lower than five. 
<img width="665" alt="viewlowinventory" src="https://user-images.githubusercontent.com/30003973/34857759-8621f210-f71a-11e7-8e64-98dc38baa606.png">

4. If manager want to add to inventory the manager will be promted to be answer two questions: 
<img width="750" alt="addtoinventory" src="https://user-images.githubusercontent.com/30003973/34857750-8427d952-f71a-11e7-950b-a9389bee5649.png">

* "What is the product item id you want to update?"
* "How many are you adding?"


5. The new quantity avaialbe will be updated to the table

6. If the manager selects 'Add New Product' the manager will be promoted with the following set of questions: 

 * "What is the product name?"
 * "What is the department name?"
 * "What is the price?"
 * "What is the stock quantity you want to add?"

7. The new product is updated to the products table 
![addnewproduct](https://user-images.githubusercontent.com/30003973/34857749-8415175e-f71a-11e7-9cc1-66ac493bc060.jpg)

## Supervisor 

1. Using the bamazon database created a new called `departments`. 

2. The table includes the following the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)
   
<img width="500" alt="supervisorview" src="https://user-images.githubusercontent.com/30003973/34857756-8523ced8-f71a-11e7-9566-33df445445fc.png">

3. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |



   
