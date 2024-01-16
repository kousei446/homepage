import React from 'react'
import About from './Aboutt'
import Hobby from './Hobby'
import Product from './Productt'
import Schoollife from './Schoollife'
import "./Menu.css"

function Munu() {
  return (
    <div className="menu" style={{width: "100%",height: "900px",flexShrink: "0"}}>
      <About/>
      <Hobby/>
      <Product/>
      <Schoollife/>
    </div>
  )
}

export default Munu