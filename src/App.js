import React, {useEffect, useState} from "react";
import Header from "./components/Navbar/Navbar";
import CartIcon from "./components/CartIcon/CartIcon"
import ItemCount from "./components/ItemCount/index"
import ItemListContainer, { ItemList } from "./components/ItemListContainer"


function App() {

 


  return (
    <div className="miApp">
    <Header/>
    < ItemCount initial={1} stock={5}/>
    
    <ItemListContainer/>
    
    
    </div>
    
  );
}



export default App;
