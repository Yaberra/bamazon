DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  product_sales INT default 0, 
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales)VALUES ("My First Words", "Books", 10 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("My First Letters", "Toys", 10 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Baby Swaddle Blanket", "Clothing", 20 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Story Books Collection and CD" , "Books", 25 ,10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Animal Farm" , "Toys", 10 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Swim wear for babies and toddlers" , "Clothing", 15 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Talking words" , "Books", 9 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Letters & numbers" , "Toys", 10, 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Summer Cloths for babies and toddlers" , "Clothing", 15 , 10);
INSERT INTO products (product_name, department_name, price,stock_quantity, product_sales) VALUES ("Teaching Phonics Grammer and Writing for Kids", "Books", 21, 10);

SELECT * FROM products;