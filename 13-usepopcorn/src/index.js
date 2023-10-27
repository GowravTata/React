import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}
const api_key = 'eadee970';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} defaultRating={3} />
    <StarRating maxRating={3} className='test' messages={['Good', 'Average', 'Bad']} defaultRating={3} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
