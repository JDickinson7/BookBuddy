import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]); // State to store the list of books
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        const data = await response.json();
        console.log('Books Data:', data); // Log data to inspect it

        // Set the books data into state
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('There was an error fetching the books.');
      }
    };

    getBooks();
  }, []); // Empty array ensures this effect runs once on component mount

  // Show error message if there's an issue fetching the books
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {/* Render each book as a list item */}
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </li>
          ))
        ) : (
          <li>No books available.</li>
        )}
      </ul>
    </div>
  );
};

export default BookList;

