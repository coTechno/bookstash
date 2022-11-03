import React from 'react'
import ProductCard from '../ProductCard'
import './Row3.css'
import {useSelector} from 'react-redux'


function Row3() {
  const productList = useSelector(state => state.productList3)
  
  return (
    <div>
      <div className="row3-container">
        <div className="row3-header">
        New Arrival
        </div>
        <div className="row3-list">
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

export default Row3