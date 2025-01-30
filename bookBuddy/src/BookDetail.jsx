import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null); 

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const data = await response.json();
        console.log('Book Data:', data);

        setBook(data); 
      } catch (err) {
        console.log(err); 
      }
    };

    fetchBook();
  }, [id]); 

  if (!book) return <div>Loading...</div>; 

  return (
    <section>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <Link to="/">Back to Library</Link> {}
    </section>
  );
};

export default BookDetail;
