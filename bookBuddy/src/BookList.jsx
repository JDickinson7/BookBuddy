import { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        //fix up the if and catch before you turn it in 
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {/* {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default BookList;
