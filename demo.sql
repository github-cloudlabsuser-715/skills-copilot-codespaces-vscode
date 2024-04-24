-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10, 2)
);

-- Insert data into the products table
INSERT INTO products (product_name, price) VALUES
('Apple iPhone 12', 799.99),
('Google Pixel 5', 699.99),
('Samsung Galaxy S21', 899.99),
('OnePlus 9 Pro', 999.99),
('Sony Xperia 1 III', 1299.99);

-- Query the products table
SELECT * FROM products;