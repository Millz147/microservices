CREATE DATABASE microservice
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE user_wallets (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  balance NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE user_payments (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  reference_id: TEXT NOT NULL,
  description TEXT,
  success BOOLEAN DEFAULT false,
  status TEXT CHECK (status IN ('success', 'pending', 'failure')),
  created_at TIMESTAMP DEFAULT NOW(),
  payment_date TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

