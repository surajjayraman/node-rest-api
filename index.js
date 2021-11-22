const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getBooks = (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addBook = (request, response) => {
  const { author, title } = request.body;

  pool.query(
    'INSERT INTO books (author, title) VALUES ($1, $2)',
    [author, title],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: 'success', message: 'Book added.' });
    }
  );
};

const deleteBook = (request, response) => {
  if (
    !request.header('apiKey') ||
      request.header('apiKey') !== process.env.API_KEY
  ) {
    return response
      .status(401)
      .json({ status: 'error', message: 'Unauthorized.' });
  }
  // ...
  return response.status(200).json({ status: 'success', message: 'Book Deleted' });
};

app
  .route('/books')
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

  app.route('/books/:id')
  // DELETE endpoint
  .delete(deleteBook);

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});