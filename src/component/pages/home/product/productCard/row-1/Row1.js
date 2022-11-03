import React from 'react'
import ProductCard from '../ProductCard'
import './Row1.css'
import {useSelector} from 'react-redux'


function Row1() {
  const productList = useSelector(state => state.productList1)
  
  return (
    <div>
      <div className="row1-container">
        <div className="row1-header">
        The Greatest Books of All Time
        </div>
        <div className="row1-list">
          {
            productList.map((product) => {
              return (
                <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                rating={product.rating}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Row1