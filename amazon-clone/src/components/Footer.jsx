import { Box, HStack } from '@chakra-ui/react';
import React from 'react'
import "./footer.css"



const Footer = () => {
    return (
        <footer>
            <Box className='footer1'>
                <Box className='footer_top'>Back to top</Box>
                <Box className='all_boxes'>
                    <Box id="box2">
                        <HStack>

                            <Box className='line1'>
                                <HStack>
                                    <Box id="get">
                                <h4>Get to Know Us</h4>
                                <ul>
                                    <li>Aboutus</li>
                                    <li>Careers</li>
                                    <li>PressReleases</li>
                                    <li>AmazonScience</li>
                                </ul>
                                </Box>
                                <Box id='connect'>
                                <h4>Social Media</h4>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                                </Box>
                                </HStack>
                            </Box>
                            {/* <Box className='line2'> */}
                                
                            {/* </Box> */}
                            <Box className='line3'>
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
                            <Box className='line4'>
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

                        </HStack>
                    </Box>
                </Box>
            </Box>
            <hr />

            <Box className='line5'>
                <img
                    className='header_logo'
                    src="https://www.sureshottee.com/wp-content/uploads/2021/07/amazon-dark-logo-png-transparent.png"
                    alt="error" />

                <select name='country' id="country">
                    <option>English</option>
                    <option>Australia</option>
                    <option>Brazil</option>
                    <option>Canada</option>
                    <option>China</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Japan</option>
                    <option>Mexico</option>
                    <option>Netherlands</option>
                    <option>Poland</option>
                    <option>Singapore</option>
                    <option>Spain</option>
                    <option>Turkey</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                </select>
            </Box>
            <hr />
            <Box className='footer_bottom'>
                <div>
                    <h4>AbeBooks</h4>
                    <p>Books, art &amp; collectibles</p>
                </div>
                <div>
                    <h4>Amazon Web Services</h4>
                    <p>Scalable Cloud<br /> Computing Services</p>
                </div>
                <div>
                    <h4>Audible</h4>
                    <p>Download <br />Audio Books</p>
                </div>
                <div>
                    <h4>DPReview</h4>
                    <p>Digital <br />Photography</p>
                </div>
                <div>
                    <h4>IMDb</h4>
                    <p>Movies, TV <br /> Celebrities</p>
                </div>
                <br />
                <div>
                    <h4>Shopbop</h4>
                    <p>Designer <br /> Fashion Brands</p>
                </div>
                <div>
                    <h4>Amazon Business</h4>
                    <p>Everything For <br /> Your Business</p>
                </div>

                <div>
                    <h4>Prime Now</h4>
                    <p>2-Hour Delivary <br />on Everyday Items</p>
                </div>
            </Box>
        </footer>
    )
}

export default Footer;