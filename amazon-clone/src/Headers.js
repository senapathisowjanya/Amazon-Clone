import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';


function Headers() {
    return (
        <div className='header'>
            <img
                className='header_logo'
                src="https://www.sureshottee.com/wp-content/uploads/2021/07/amazon-dark-logo-png-transparent.png"
                alt="error" />

            <div className='header_option'>
                <div className='header_location'>
                <PlaceIcon className='location'/>
                <span className='header_optionLineOne'>Hello</span>
                
                </div>
                <span className='header_optionLineTwo'>Select your address</span>
            </div>

            <div className='header_search'>
                <input
                    className='header_searchInput'
                    type="text" />
                {/* logo */}
                <SearchIcon className='header_searchIcon' />

            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <div className='header_optionBasket'>
                    <ShoppingCartIcon />

                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>



            </div>
            



        </div>
    )
}

export default Headers