import React from "react"
import "./Products.scss"
import ProductCard from "./ProductCard"


const Products = (data) => {
    console.log(data.data, "productos")

    const productCards = data?.data.map((card,id) => (
            <ProductCard data={card}/>
        )
    )
  
    return (
      <div className="Products">
        <div className="emptyLeft"></div>
        <div className="Products__content">
            {productCards}
        </div>
        <div className="emptyRight"></div>
      </div>
    )
  }
  
  export default Products