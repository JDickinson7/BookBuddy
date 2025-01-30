import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList'; // Make sure these components are correctly imported
import BookDetail from './BookDetail';

function App() {
  return (
    <Router>
      <h1>Book Buddy</h1>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
