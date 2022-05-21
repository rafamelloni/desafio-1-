import {Container, Row, Col} from "react-bootstrap"
import Header from "./components/Navbar/Navbar";
import CartIcon from "./components/CartIcon/CartIcon"
import ItemCount from "./components/ItemCount/index"
import ItemListContainer, { ItemList } from "./components/ItemListContainer"
import Item from "./components/Item/Item"



function App() {

 


  return (
    <>
    <div className="miApp">

    <Header/>
     
      <Item initial={1} stock={5}/>  
      <Item initial={1} stock={5}/>  
      <Item initial={1} stock={5}/>  
    
    </div>
   </>
    
  );
}



export default App;
