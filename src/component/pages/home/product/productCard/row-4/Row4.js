import React from 'react'
import ProductCard from '../ProductCard'
import './Row4.css'
import {useSelector} from 'react-redux'


function Row4() {
  const productList = useSelector(state => state.productList4)
  
  return (
    <div>
      <div className="row4-container">
        <div className="row4-header">
        Academic
        </div>
        <div className="row4-list">
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

export default Row4