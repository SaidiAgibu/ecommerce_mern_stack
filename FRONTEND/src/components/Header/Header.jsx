import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import './header.css';
//import UserOptions from './UserOptions';
//import {useSelector} from 'react-redux';


const Header = () => {

   // const {isAuthenticated, user} = useSelector(state => state.user);
    const [isSticky, setIsSticky] = useState(false);
   

    


    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);

   
    


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
                        <h2 className="nav_logo">
                            <Link to="/">TaylorGoods</Link>
                        </h2>
                        <nav className="nav_actions">
                            <div className="search_action">
                                <Link to="/search">
                                    <AiOutlineSearch />
                                </Link>
                                <div className="tooltip">Search</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                    <AiOutlineShoppingCart />
            
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>

                            <div className="user_action">
                                <Link to="/account">
                                    <AiOutlineUser />
                                </Link>
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            

            
          
        </>
    );
};

export default Header;