import React from 'react';
import Review from './Review';
const url = 'https://randomuser.me/api/'

function App() {

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
