import React,{useEffect} from "react";
import './App.css';
import './app.scss';
import LoginSignUp from './components/User/LoginSignUp'

import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
//import Loader from "./components/Loader/Loader";
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllProducts from './components/Product/AllProducts';
import Search from './components/Search/Search';
import Profile from './components/User/Profile'
import ForgotPassword from './components/User/ForgotPassword'
import {useSelector} from 'react-redux';
import {loadUser} from './actions/userAction';
import store from './store';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ResetPassword from './components/User/ResetPassword'
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';

import Payment from './components/Cart/Payment';
import OrderSuccess from './components/Cart/OrderSuccess';
import {Elements} from '@stripe/react-stripe-js';
//import {loadStripe} from '@stripe/stripe-js';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import UsersList from './components/Admin/UsersList';
import UpdateUser from './components/Admin/UpdateUser';
import ProductReviews from './components/Admin/ProductReviews';

function App() {
    const {isAuthenticated, user} = useSelector(state => state.user);

    /* const [stripeApiKey, setStripeKey] = useState("");

    async function getStripeApiKey() {
        const {data} = await axios.get("/api/v1/stripeapikey");

        setStripeKey(data.stripeApiKey);
    } */

    useEffect(() => {
        store.dispatch(loadUser());

        //getStripeApiKey();
    }, [])
    
    return (
        <Router>
            <Header />
            
            {isAuthenticated }

            <Route exact path="/" component={Home}/>
            <Route exact path="/product/:id" component={ProductDetails}/>
            <Route exact path="/products" component={AllProducts}/>
            <Route path="/products/:keyword" component={AllProducts}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/login" component={LoginSignUp}/>
            <Route exact path="/cart" component={Cart}/>
            <ProtectedRoute exact path="/account" component={Profile}/>
            <ProtectedRoute exact path="/me/update" component={UpdateProfile}/>
            <ProtectedRoute exact path="/password/update" component={UpdatePassword}/>
            <ProtectedRoute exact path="/shipping" component={Shipping}/>
            
            
            
            <Route exact path="/password/forgot" component={ForgotPassword}/>

            <Route exact path="/password/reset/:token" component={ResetPassword}/>

        
            <ProtectedRoute exact path="/process/payment" component={Payment}/>
            <ProtectedRoute exact path="/success" component={OrderSuccess}/>
            <ProtectedRoute exact path="/orders" component={MyOrders}/>
            
            <ProtectedRoute exact path="/order/:id" component={OrderDetails}/>
            <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder}/>
            

            <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/products" component={ProductList}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/product" component={NewProduct}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/product/:id" component={UpdateProduct}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/orders" component={OrderList}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/order/:id" component={ProcessOrder}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/users" component={UsersList}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser}/>
            <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={ProductReviews}/>
            
            
            
        </Router>
        
    );
}

export default App;