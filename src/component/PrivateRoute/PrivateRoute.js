import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ user,children }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let location = useLocation();
    
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  };

export default PrivateRoute;