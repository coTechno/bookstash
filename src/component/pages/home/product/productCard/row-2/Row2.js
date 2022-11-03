import React from 'react'
import ProductCard from '../ProductCard'
import './Row2.css'
import {useSelector} from 'react-redux'


function Row2() {
  const productList = useSelector(state => state.productList2)
  
  return (
    <div>
      <div className="row2-container">
        <div className="row2-header">
        Best Sellers
        </div>
        <div className="row2-list">
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

export default Row2