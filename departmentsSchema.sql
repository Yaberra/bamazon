USE bamazon;

CREATE TABLE departments(
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(100) NOT NULL,
  over_head_costs INT default 0, 
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs) VALUES ("Books", 6);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Toys", 5);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Clothing", 12);

SELECT * FROM departments;
