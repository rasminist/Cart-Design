import React from 'react'

function ProductList({product,addToCart}) {
  return (
    <div className='product_List_design'>
      {
        product.map((ele,ind)=>{
            
               return(
                
                <div  style={{width:'33.33%'}}>

                    <img src={ele.url} alt=""  width="100%"/>   
                    <p style={{padding:"5px"}}>{ele.name} | {ele.catagory}</p>             
                    <p>{ele.seller}</p>
                  
                    <p>Rs.{ele.price}/-</p>
                    <button onClick={() => addToCart(ele)}>Add To Cart</button>
                </div>
               );
        })
      }
    </div>
  )
}

export default ProductList
