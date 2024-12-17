import React from 'react';
import ReactDOM from 'react-dom/client';

//  import App from './App'
// import FirstBird from './pages/FirstBirdDetails';
import reportWebVitals from './reportWebVitals';
// import AddBirds from './pages/AddBirds';
import CardList from './pages/AllBirdDetails';
// import AddBirds from './pages/AddBirds';
import App from './App';
import CardListWithCart from './pages/AddCart';
// import CardListWithCart from './pages/AddCart';
// import Addcard from './pages/Addcard';
// import MoreDetails from './pages/MoreDetails';
// import AddDetails from './pages/AddDetails';
import Order from './pages/Order';
 import Report from './pages/Report';
import DisplayReport from './pages/DisplayReport';
import AdminNav from './pages/AdminNav';
import Customer from './pages/Customer';
import AllBirdNav from './pages/AllBirdNav';
import AddBirdDetails from './pages/AddBirds';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);
reportWebVitals();
