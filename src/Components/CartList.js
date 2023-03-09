import React from "react";

import{useState,useEffect} from "react"
function CartList({ cart }) {
  
  const[CART,setCART]=useState([]);

  useEffect(()=>{
    setCART(cart)
  },[cart])


  return (
    <div>
 
      {CART.map((ele, ind) => {
        return (
          <div>
            <img src={ele.url} alt="" width="50" />
            <span>{ele.name}</span>
            <button onClick={()=>{
                 const _CART=CART.map((input,index)=>{
                  return  ind===index ? {...input,quantity:input.quantity+1}:input
                 })
                 setCART(_CART)
            }}>+</button>
            <span>{ele.quantity}</span>
            <button>-</button>
            <span>Rs.{ele.price}/-</span>
            <hr />
          </div>
        );
      })}


  <p> Price:-

    {
      CART.map((ele,ind)=>ele.price * ele.quantity).reduce((acc,ele)=>acc+=ele,0)
    }
  </p>

    


    </div>
  );
}

export default CartList;
