
import './App.css';
import {useState} from "react";
import Header from './Components/Header';
import ProductList from './ProductList';
import CartList from "./Components/CartList"

const info = [
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "mobile",
    catagory: "electronics",
    seller: "gupta mobiles",
    price: 21000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "tv",
    catagory: "electronics",
    seller: "gupta mobiles",
    price: 19000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "washing Machine",
    catagory: "electronics",
    seller: "roy enterprises",
    price: 45000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",

    name: "laptop",
    catagory: "electronics",
    seller: "sharma mobiles",
    price: 192000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "powerBank",
    catagory: "electronics",
    seller: "roy enterprises",
    price: 45000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "mouse",
    catagory: "electronics",
    seller: "sharma mobiles",
    price: 192000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "earphone",
    catagory: "electronics",
    seller: "roy enterprises",
    price: 45000
  },
  {
    url:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "laptop",
    catagory: "electronics",
    seller: "sharma mobiles",
    price: 192000
  }
];
function App() {

   const[product,setproduct]=useState(info);
   const [cart,setCart]=useState([]);
   const[showCart,setShowCart]=useState(false)


   const addToCart=(info)=>{
      
      setCart([...cart,{...info,quantity:1}]);
      
   }

   const headerShow=(val)=>{
    setShowCart(val)
   } 
   

  return (
    <div>
          <Header headerShow={headerShow} count={cart.length}/>
          {
            showCart ?<CartList cart={cart}/> :
          <ProductList product={product} addToCart={addToCart}/>

          }
          
    </div>
  );
}

export default App;
