import React from 'react';
import Carousel from '../../../component/header/Carousel';
import Row1 from './product/productCard/row-1/Row1';
import Row2 from './product/productCard/row-2/Row2';
import Row3 from './product/productCard/row-3/Row3';
import Row4 from './product/productCard/row-4/Row4';

function Home() {
  return (
    <div>
        <Carousel />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
    </div>
  )
}

export default Home