import React, { Fragment, useEffect, useState } from 'react';
import './AllProducts.css';
import Product from '../Product/Product';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import Pagination from 'react-js-pagination';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {useAlert} from 'react-alert';
import {clearErrors} from '../../actions/productAction';
import Footer from '../Footer/Footer';

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];
  
  const AllProducts = ({ match }) => {
    const dispatch = useDispatch();
  
    const alert = useAlert();
  
    const [currentPage, setCurrentPage] = useState(1);
    
    const [category, setCategory] = useState("");
  
    const [ratings, setRatings] = useState(0);

    //const [isFilterBoxOpen, setFilterBoxOpen] = useState(false);
  
    const {
      products,
      loading,
      error,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    } = useSelector((state) => state.products);
  
    const keyword = match.params.keyword;
  
    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    };
  
    let count = filteredProductsCount;
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getProduct(keyword, currentPage, category, ratings));
    }, [dispatch, keyword, currentPage, category, ratings, alert, error]);
  
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            
            <h2 className="productsHeading">Products</h2>
  
            <div className="products">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>

            {/*<button onClick={() => setFilterBoxOpen(!isFilterBoxOpen)} className="filterButton">Filter</button> */}
            
            { /*isFilterBoxOpen && ( */
              <div className="filterBox">
              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
  
              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>
           /* )}*/}
            
            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </Fragment>
        )}
        <Footer />
      </Fragment>
      
    );
  };
  
  export default AllProducts;