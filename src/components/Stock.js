import React from "react";

function Stock({ stock, handlePort }) {
  const {id, ticker, name, price } = stock

  function handleClick(){
    handlePort(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" >
          <h5 className="card-title" onClick={handleClick}>{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
