CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL, 
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  images BYTEA []
);
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC,
  size VARCHAR(100),
  details TEXT,
  images BYTEA[],
  product_Type TEXT,
  gender TEXT

);

CREATE TABLE coach (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  Email VARCHAR(255),
  details TEXT,
  coach_id UUID,
  images BYTEA[],
  deleted BOOLEAN DEFAULT false,
  FOREIGN KEY (coach_id) REFERENCES users(user_id)
);

CREATE TABLE payment (
  payment_id SERIAL PRIMARY KEY,
  user_id UUID,
  payment_cost NUMERIC,
  coach_id INTEGER,
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (coach_id) REFERENCES coach(id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE payment_product (
  payment_id SERIAL,
  product_id INTEGER,
  FOREIGN KEY (payment_id) REFERENCES payment(payment_id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);