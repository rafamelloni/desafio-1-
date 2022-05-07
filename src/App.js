
import Header from "./components/Navbar/Navbar";
import CartIcon from "./components/CartIcon/CartIcon"
import ItemCount from "./components/ItemCount/index"


function App() {
  return (
    <div className="miApp">
    <Header/>
    < ItemCount initial={1} stock={5} />
    </div>
    
  );
}



export default App;
