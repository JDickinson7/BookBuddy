import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // Initialize state for the book

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const data = await response.json();
        console.log('Book Data:', data); // Log the data to check the structure

        setBook(data); // Set the book data to state
      } catch (err) {
        console.log(err); // Log any errors
      }
    };

    fetchBook();
  }, [id]); // Fetch the book whenever the ID changes

  if (!book) return <div>Loading...</div>; // Show loading until the book is fetched

  return (
    <section>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <Link to="/">Back to Library</Link> {/* Link back to the book list */}
    </section>
  );
};

export default BookDetail;
