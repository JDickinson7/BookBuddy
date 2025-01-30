import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const allUsers = await response.json();
        setUsers(allUsers); // Setting the users data into state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers(); // Calling the async function to fetch data

    // Cleanup function (if needed)
    return () => {
      // No cleanup needed here, but this is where you'd put it if necessary
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <ol>
      {users.map((singleUser) => (
        <li key={singleUser.id}>
          <Link to={`/details/${singleUser.id}`}>{singleUser.name}</Link>
        </li>
      ))}
    </ol>
  );
};

export default UserList;
