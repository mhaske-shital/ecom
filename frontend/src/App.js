import {BrowserRouter,Route}from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home'
import Login from './pages/Login';
import Logout from './pages/Logout';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Summary from './pages/Summary';
import OrderSuccess from "./pages/OrderSuccess";
import Dashboard from './admin/Dashboard';
import AddProduct from './admin/AddProduct';
function App() {
  return (
    <BrowserRouter>
    {/* {
      JSON.stringify(process.env.REACT_APP_URL)
    } */}
       <Navbar/>
       <Route path="/" exact component={Home}/>
       <Route path="/product/:id?" component={Product}/>
       <Route path="/cart/:id?" component={Cart}/>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={Register}/>
       <Route path="/checkout" component={Checkout}/>
       <Route path="/logout" component={Logout}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/summary" component={Summary}/>
       <Route path="/order-success" component={OrderSuccess}/>
       <Route path="/dashboard" component={Dashboard}/>
       <Route path="/addproduct" component={AddProduct}/>

    </BrowserRouter>
  );
}

export default App;
