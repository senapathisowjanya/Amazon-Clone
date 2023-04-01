import { Box, HStack } from '@chakra-ui/react';
import React from 'react'
import "./footer.css"



const Footer = () => {
    return (
        <footer>
            <Box className='footer1'>
                <Box>Back to top</Box>
                <HStack>
            <Box>
                <h4>Get to Know Us</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>
            </Box>
            <Box>
                <h4>Connect with Us</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </Box>
            <Box>
                <h4>Make Money with Us</h4>
                <ul>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>
            </Box>
            <Box>
                <h4>Let Us Help You</h4>
                <ul>
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Help</li>
                </ul>
            </Box>
            <Box>
                <h4>English</h4>
                <ul>
                    <li>Australia</li>
                    <li>Brazil</li>
                    <li>Canada</li>
                    <li>China</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Mexico</li>
                    <li>Netherlands</li>
                    <li>Poland</li>
                    <li>Singapore</li>
                    <li>Spain</li>
                    <li>Turkey</li>
                    <li>United Arab Emirates</li>
                    <li>United Kingdom</li>
                    <li>United States</li>
                </ul>
            </Box>
            </HStack>
            </Box>
            <div>
                <h4>AbeBooks</h4>
                <p>Books, art &amp; collectibles</p>
            </div>
            <div>
                <h4>Amazon Web Services</h4>
                <p>Scalable Cloud Computing Services</p>
            </div>
            <div>
                <h4>Audible</h4>
                <p>Download Audio Books</p>
            </div>
            <div>
                <h4>DPReview</h4>
                <p>Digital Photography</p>
            </div>
            <div>
                <h4>IMDb</h4>
                <p>Movies, TV &amp; Celebrities</p>
            </div>
            <div>
                <h4>Shopbop</h4>
                <p>Designer Fashion Brands</p>
            </div>
            <div>
                <h4>Amazon Business</h4>
                <p>Everything For Your Business</p>
            </div>
            <div>
                <h4>Prime Now</h4>
            </div>
            </footer>
            )
}

            export default Footer;