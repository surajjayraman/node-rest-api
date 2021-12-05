import fetch from 'node-fetch';

  const newBook = {
    title: 'Elon Musk',
    author: 'Elon Musk',
  }
  
  try {
    let response = await fetch('http://localhost:3002/books')
    const books = await response.json()
  
    console.log(books)

    response = await fetch(
      'http://localhost:3002/books',
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