import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portList, onPortRemove }) {
  return (
    <div>
      <h2>My Portfolio</h2>
        {portList.map((stock) => (
          <Stock key={stock.id} stock={stock} handlePort={onPortRemove}/>
        ))}
    </div>
  );
}

export default PortfolioContainer;
