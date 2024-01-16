import React from 'react'
import About from './Aboutt'
import Hobby from './Hobby'
import Product from './Productt'
import Schoollife from './Schoollife'

function Munu() {
  return (
    <div style={{width: "100%",height: "900px",flexShrink: "0",background: "#D9D9D9"}}>
      <About/>
      <Hobby/>
      <Product/>
      <Schoollife/>
    </div>
  )
}

export default Munu