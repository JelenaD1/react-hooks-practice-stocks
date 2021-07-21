import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
 const [stocks, setStocks] = useState([])
const [portfolio, setPortfolio] = useState([])
const[filterStock, setFilterStock] = useState("All")

const [sortStocks, setSortStocks] = useState("Price")

 useEffect(() => {
   fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => setStocks(data))

 }, [])


 const handleClickStock = (stock) => {

  if(portfolio.includes(stock)) {
    const updatedPortfolio = portfolio.filter(element => element.id !== stock.id)
    setPortfolio(updatedPortfolio)
  } else {
   setPortfolio([...portfolio, stock])
  }
}


 const handleSort = (e) => {
   setSortStocks(e.target.value)

 }

 let sortedStocks
 if(sortStocks === "Alphabetically") {
   sortedStocks = stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
 } else if(sortStocks === "Price") {
  sortedStocks = stocks.sort((a, b) => (a.price - b.price))
 } else {
   sortedStocks = stocks
 }

 let filteredAndSortedStock = sortedStocks.filter(stock => {
   if(filterStock === "All") {
     return true
   } else {
   return stock.type === filterStock
   }
  })

   
 


 


 const handleFilter = (e) => {
   setFilterStock(e.target.value)

 }
 




  return (
    <div>
      <SearchBar sortStocks={sortStocks} onCheckSort={handleSort} filterStock={filterStock} onClickFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer onClickAddStock={handleClickStock} stocks={filteredAndSortedStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer onClickAddStock={handleClickStock} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
