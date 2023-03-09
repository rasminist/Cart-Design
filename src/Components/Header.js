import React from 'react'



function Header(props) {
  return (
    <div className='header_design'>
      <div  onClick={()=>props.headerShow(false)}>
          Shopping Cart...
      </div>
           <div onClick={()=>props.headerShow(true)}>
              Cart  <sup>{props.count}</sup>
           </div>
    </div>
  )
}

export default Header
