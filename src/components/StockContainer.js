import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onClickAddStock}) {


  const stocksToShow = stocks.map(stock => {
    return (
      <Stock onClickAddStock={onClickAddStock} key={stock.id} stock={stock} />
    )
  })


  return (

    <div>
      <h2>Stocks </h2>
      {stocksToShow}
     
      
    </div>
    
  )
}

export default StockContainer;
