import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onClickAddStock}) {

  const portfolioToShow = portfolio.map(stock => {
    return (
      <Stock onClickAddStock={onClickAddStock} key={stock.id} stock={stock} />
    )
  })



  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioToShow
      }
    </div>
  );
}

export default PortfolioContainer;
