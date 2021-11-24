const express = require('express');
const exphbs = require('express-handlebars').create(
  { defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      getShortComment(comment) {
        if (comment.length < 64) {
          return comment;
        }

        return comment.substring(0, 61) + '...';
      }
    }

  });
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

// configure express-handlebars as our view engine
app.engine('hbs', exphbs.engine);

app.set('view engine', 'hbs');

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

app.get('/', (req, res) => {
  res.render('home', {
    post: [{
      author: 'Suraj Nair',
      image: 'https://picsum.photos/500/500',
      comments: ['This is the first comment',
        'This is the second comment',
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.',
        'Hello! This is cool!']
    },
    {
      author: 'John Doe',
      image: 'https://picsum.photos/500/500?2',
      comments: [
      ]
    }]
  });
});

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