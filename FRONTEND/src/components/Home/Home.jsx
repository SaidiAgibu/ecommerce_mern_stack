import React, { Fragment, useEffect } from 'react';

import './home.css';
import Product from '../Product/Product';
import MetaData from '../layout/MetaData';
import {getProduct, clearErrors} from '../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';
import Services from '../Footer/Services'
import Footer from '../Footer/Footer'


const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch();
    const {loading, error, products} = useSelector((state) => state.products)

    useEffect(() => {
        console.log(getProduct())
        if(error) {
            return alert.error(error)
            dispatch(clearErrors());
            
        }
        
        dispatch(getProduct());
    }, [dispatch, error, alert])
    return (
        <Fragment>
            {loading ? (<Loader />): (<Fragment><MetaData title="TaylorGoods" />
            <div className='banner'>
                <p>Explore our selection </p>
                <h1>Find the best deals</h1>

              <a href='#containerHome'>
                <button>
                    SHOP NOW 
                </button>
              </a>
            </div>

            <h2 className='homeHeading'>Featured Products</h2>
        
            <div className="containerHome" id="containerHome">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
          
            </Fragment>)}
            <div>
              <Services />
              <Footer />
            </div>
        </Fragment>
       
        
      
    )
}

export default Home;