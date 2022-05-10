import itemList from "./components/itemList/itemList"
import Header from "./components/Navbar/Navbar";
import CartIcon from "./components/CartIcon/CartIcon"
import ItemCount from "./components/ItemCount/index"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div className="miApp">
    <Header/>
    < ItemCount initial={1} stock={5}/>
    <itemList productList={productList}/>
    </div>
    
  );
}



export default App;
