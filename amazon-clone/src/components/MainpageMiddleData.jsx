import React from 'react'
import Home from "./Home"
import ProductFeed from './ProductFeed';
import Headers from '../Headers';

import SignIn from './SignIn';
import HeaderBottom from './HeaderBottom';
import Footer from './Footer';


function MainpageMiddleData() {
  return (
    <div>
      <Headers />
      <HeaderBottom />
        <Home/>
      <ProductFeed />
      <SignIn/>
      <Footer />
    </div>
  )
}

export default MainpageMiddleData