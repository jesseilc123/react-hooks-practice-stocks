import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks }) {
  const [filterTextValue, setFilterText] = useState("Tech")
  const [selectFilter, setSelectFilter] = useState(null)
  const [portList, setPortList] = useState([])

  const filterStockList = stocks.filter((stock) => {
    return stock.type === filterTextValue
  })

  function onFilterValueSelected(filterValue) {
    setFilterText(filterValue)
  }

  function sortByPrice(event){
    setSelectFilter(event.target.value)
    return stocks.sort((a, b) => a.price > b.price ? 1 : -1)
  }

  function sortByName(event){
    setSelectFilter(event.target.value)
    return stocks.sort((a, b) => a.name.localeCompare(b.name))
  }

  function onPortAdd (item) {
    const data = [...portList, item]
    setPortList(data)
  }

  function onPortRemove (item) {
    const updatedData = portList.filter((stock) => stock.id !== item.id)
    setPortList(updatedData)
  }

  return (
    <div>
      <SearchBar 
        filterStockList={onFilterValueSelected}
        sortByPrice={sortByPrice}
        sortByName={sortByName}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filterStockList} 
            selectFilter={selectFilter}
            onPortAdd={onPortAdd}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portList={portList}
            onPortRemove={onPortRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
