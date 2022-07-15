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
import Shipment from './component/Shipment/Shipment';
import Login from './component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const[loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]} >
      {/* <h3>email: {loggedInUser.email}</h3> */}
      
      <BrowserRouter>
      <Header ></Header>
      <Routes> 
      <Route path="/" element={<Navigate to ="/shop" />}/>
      <Route path="*" element={<Notfound />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/product/:productId" element={<ProductInfo/>}/>
      <Route path="/review" element={<Review />}/>
      <Route path="/shipment" element={<PrivateRoute user ={loggedInUser.email}>
        <Shipment />
        </PrivateRoute> }
        />
        {/* <Route element={<PrivateRoute user ={loggedInUser.email} />}>
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/manage" element={<Inventory/>} />
        </Route> */}
      <Route path="/login" element={<Login />}/>
      <Route path="/manage" element={<PrivateRoute user ={loggedInUser.email}>
        <Inventory/>
      </PrivateRoute> }
      />

      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
