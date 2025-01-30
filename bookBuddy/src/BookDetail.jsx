import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const { id } = useParams(); // Get the book id from the URL
  const [book, setBook] = useState(null); // Initialize book state

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const data = await response.json();
        setBook(data); // Set the fetched book data
      } catch (err) {
        console.log(err); // Handle any errors
      }
    };

    fetchBook();
  }, [id]); // Dependency array ensures the effect runs whenever the id changes

  if (!book) return <div>Loading...</div>; // Show loading message while data is being fetched

  return (
    <section>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      {/* You can add more details about the book here */}
      
      <Link to="/">BACK</Link> {/* Link to go back to the previous page */}
    </section>
  );
};

export default BookDetail;
