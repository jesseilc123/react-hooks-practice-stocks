import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onPortAdd }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} handlePort={onPortAdd} />
      ))}
    </div>
  );
}

export default StockContainer;
