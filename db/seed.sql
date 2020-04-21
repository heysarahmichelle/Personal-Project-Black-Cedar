CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(250) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(300) NOT NULL,
    description TEXT,
    price DECIMAL NOT NULL
);

CREATE TABLE customer_cart (
    cart_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    paid BOOLEAN
);

CREATE TABLE cart_items (
    cart_item_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES customer_cart(cart_id),
    product_id INT REFERENCES products(product_id),
    qty INT,
    price DECIMAL
);