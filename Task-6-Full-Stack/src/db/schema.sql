--- Movie Watch API Database Schema

CREATE TABLE Movies (
  movie_id INT IDENTITY(1,1) PRIMARY KEY,
  movie_name VARCHAR(255) NOT NULL,
  release_date DATE,
  is_watched BIT DEFAULT 0,
  created_at DATETIME2 DEFAULT GETDATE()
);
