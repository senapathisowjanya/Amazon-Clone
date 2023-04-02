import React from 'react'
// import { useEffect,useState } from 'react'
import AllProducts from './AllProducts';

import "./home.css"
const data=[{avatar: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81vDZyJQ-4L._SY550_.jpg",
    category: "Mobiles",
    createdAt: "2023-03-31T02:24:35.533Z",
    description: "5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 11.0 operating system and dual SIM",
    id: "1",
    name: "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
    price: " ₹29,999"
},
{avatar: "https://m.media-amazon.com/images/I/51eYerc4PRS.jpg",
category: "furniture",
  createdAt:  "2023-03-30T13:59:59.266Z",
  description: "Chesterfield Seater Sofa Set Dimensions - Length : 82, Width 32 Height : 30 Seating Height : 18 , Seating Height (From ground to seat) : 18 (All Dimensions are in inches)",
  id: "2",
  name: "ES ESPINHO ESPN0012 Solid Sal Wood Leatherette Upholstered Button Tufted Chesterfield 3 Seater Sofa Set for Living Room, Brown Color",
  price: "₹27,490"},


    {avatar: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71ytn4YEPnS._SX425_.jpg",
    category: "Kitchen Items",
    createdAt: "2023-03-30T15:07:41.723Z",
    description : "Tough construct: Nirlon brings forward a wide variety of kitchenware collection which is engineered with top-notch quality material. Each of the utensils has a thick and durable base that offers no warping & wobbling of the product.",
        id:  "3",
        name: "Nirlon Aluminium Non Stick Cookware Pots and Pans Set with Bakelight Handle, Red",
        price: "₹659"
    },
    {avatar: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71Lx1eGWZUL._SX522_.jpg",
    category:"Grocers",
    createdAt: "2023-03-31T02:31:16.039Z",
    description : "DIRECT FROM FARM: Farmley Cashews are directly sourced from the farm and are hygienically packed in a HACCP certified unit.",
        id:  "4",
        name: "Farmley Premium Cashews | Mangalore Origin Kaju (500 g)",
        price: "₹439"
    },
    {avatar: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/619KCGgvH4L._UX569_.jpg",
    category:"Dress",
    createdAt: "2023-03-30T22:25:24.340Z",
    description : "An Amazon brand, Symbol is built on the pillars of quality, reliability and affordability, offering a range of lifestyle",
        id:  "5",
        name:  
        "Amazon Brand - Symbol Men's Regular Fit T-Shirt",
        price: "₹259"
    },
    {avatar: "https://m.media-amazon.com/images/I/51eYerc4PRS.jpg",
    category: "furniture",
    createdAt: "2023-03-30T13:59:59.266Z",
    description: "Chesterfield Seater Sofa Set Dimensions - Length : 82, Width 32 Height : 30 Seating Height : 18 , Seating Height (From ground to seat) : 18 (All Dimensions are in inches)",
    id: "6",
    name: "ES ESPINHO ESPN0012 Solid Sal Wood Leatherette Upholstered Button Tufted Chesterfield 3 Seater Sofa Set for Living Room, Brown Color",
    price: "₹27,490"},
    {avatar: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81294zyH7aL._UX569_.jpg",
    category: "Dress",
      createdAt: "2023-03-30T18:57:17.522Z",
      description: "SIVARAJ SPINNING MILLS P LTD GARMENT DIVISION, SIVARAJ SPINNING MILLS P LTD GARMENT DIVISION, Dindigul",
      id: "7",
      name: "Amazon Brand - Eden & Ivy Women T-Shirt",
      price: " ₹278"
    },
    {avatar: "https://m.media-amazon.com/images/I/31z9o1XYouL._AC_SR400,600_.jpg",
    category: "Jewellery",
    createdAt: "2023-03-30T13:59:59.266Z",
    description: "The dewy pendant holds a AAA+ quality zircon on top of a Stamped 925 sterling silver. It is rhodium e-coated to prevent tarnish. Includes 38cm + 5cm Adjustable Sterling Silver Chain, AAA+ Quality Zircons, Rhodium e-coat to prevent tarnish. Charm Dimensions: 22mm*10m",
    id: "27",
    name: "925 Sterling Silver Anushka Sharma Falling Dew Necklace",
    price: "₹1,499"}
    ]

function ProductFeed() {
  
   console.log("sowji",data)
  return (
    <div className='responsive'>
       
        {data?.map((item)=>{
           return <AllProducts 
           key={item.id}
           id={item.id}
           name={item.name}
           price={item.price}
           category={item.category}
           avatar={item.avatar}
           description={item.description}
           />
        })}
    </div>
  )
}

export default ProductFeed