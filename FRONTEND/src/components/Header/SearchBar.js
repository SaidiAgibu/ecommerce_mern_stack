import React, {  useRef, useState } from 'react';
import useOutsideClose from './useOutsideClose';
import useScrollDisable from './useScrollDisable';
// import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {

    
    const [isSearchOpen, setSearchOpen] = useState(false);

    const searchRef = useRef();

    // closing the SearchBar
    const closeSearch = () => {
        toggleSearch(false);
        
    };
    const toggleSearch = (open) => {
        setSearchOpen(open);
    };

    useOutsideClose(searchRef, closeSearch);

    useScrollDisable(isSearchOpen);


    


    return (
        <>
            
                    <div id="searchbar" className="backdrop">
                        <div className="searchbar_content">
                            <div className="search_box">
                                <input
                                    type="search"
                                    className="input_field"
                                    placeholder="Search for product..."
                                    
                                />
                                {/* <button
                                    type="button"
                                    className="btn"
                                    disabled={searchResults.length === 0}
                                >
                                    <AiOutlineSearch />
                                </button> */}
                            </div>
                        </div>
                    </div>
                
            
        </>
    );
};

export default SearchBar;