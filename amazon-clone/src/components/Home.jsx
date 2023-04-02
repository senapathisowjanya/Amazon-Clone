import React from 'react'
import {Box,Image} from "@chakra-ui/react"
import "./home.css"
import Product from './Product';
import SingleImage from './SingleImage';

function Home() {
  return (
   <Box className='home'>
    <Box className='home_container'>
      <Image 
      className='home_image'
      src="https://m.media-amazon.com/images/I/61qNsQMmLCL._SX3000_.jpg" alt="Error" />
      <Box className='home_row1'>
        <Product 
        heading="Book travel tickets and get exciting offers" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Flight_186x116._SY116_CB613655434_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Train_186x116._SY116_CB613655434_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Bus_186x116._SY116_CB613655434_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Accessory_186x116._SY116_CB613655434_.jpg"
        link="see more"
        h1="Get up to $2000 off+2% back on flights"
        h2="Zero payment gateway charges"
        h3="Get flat 10% back on bus tickets"
        h4="Products for your travel needs"
        marginleft="-20px"
        />
         <SingleImage
         h1="Up to 70% off |"
         h2="Clearance store"
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
         link="see more"/>
        <Product
        heading="Up to 60% off | Styles for men" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
        link="see more"
        h1="Clothing"
        h2="Footwear"
        h3="Watches"
        h4="Bags & luggage"
        />
        <Product 
        heading="Up to 50% off|Baby products & toys" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_diaper_186x116._SY116_CB620365328_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_Teddy_186x116._SY116_CB620365328_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_indoor_game_186x116._SY116_CB620365328_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/PC_QC_rideon_372X232._SY116_CB620365328_.jpg"
        link="see more"
        h1="Clothing"
        h2="Footwear"
        h3="Watches"
        h4="Bags & luggage"
        />
      
      </Box>
      <Box className='home_row' marginTop="400px" >
      <Product 
        heading="Upgrade your home | Amazon Brands & more" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Mixer-186x116._SY116_CB614658577_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_bedsheet-qc1_186x116_in-en._SY116_CB594776299_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Conatiner-186x116._SY116_CB614658577_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Photoframe-186x116._SY116_CB614658577_.jpg"
        link="see more"
        h1="Up to 50% off|Home appliances"
        h2="Up to 55% off|Bedsheets & more"
        h3="Starting $169|Countainers &more"
        h4="Starting $229|Photo frames,clocks &more"
        />
         <Product 
        heading="Up to 60% off | Professional tools, testing & more" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
        link="see more"
        h1="Professional tools"
        h2="Measuring instruments"
        h3="Cleaning supplies"
        h4="Medical supplies"
        />
         <Product 
        heading="Automotive essentials | Up to 60% off" 
        image1='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg'
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
        link="see more"
        h1="Cleaning accessories"
        h2="Tyre & rim care"
        h3="Helmets"
        h4="Vaccum cleaner"
        />
        <SingleImage
         h1="Up to 50% off |"
         h2="Monitor blood sugar at home"
         image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
         link="see more"/>
      </Box>
      
    </Box>
   </Box>
  )
}

export default Home;