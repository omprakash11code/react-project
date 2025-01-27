import React from 'react';  

function Card({username}) {
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

