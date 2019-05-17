
\c reireviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL NOT NULL,
  username VARCHAR(30) NOT NULL,
  postdate DATE NOT NULL,
  title VARCHAR(100) NOT NULL,
  review VARCHAR(1000) NOT NULL,
  rating INT NOT NULL,
  recommended BOOLEAN NOT NULL,
  images VARCHAR(1000) NOT NULL
);