import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Review/Review';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Inventory from './component/Inventory/Inventory';
import Notfound from './component/Notfound/Notfound';
import ProductInfo from './component/ProductInfo/ProductInfo';



function App() {
  return (
    <div >
      <Header></Header>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to ="/shop" />}/>
      <Route path="*" element={<Notfound />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/product/:productId" element={<ProductInfo/>}/>
      <Route path="/review" element={<Review />}/>
      <Route path="/manage" element={<Inventory />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
