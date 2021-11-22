import fetch from 'node-fetch';

  const newBook = {
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
  }
  
  try {
    let response = await fetch('http://localhost:5000/books')
    const books = await response.json()
  
    console.log(books)

    response = await fetch(
      'http://localhost:5000/books',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(newBook),
      }
    )
    const newbooks = await response.json()
  
    console.log(newbooks)
  } catch (error) {
    console.log(error)
  }