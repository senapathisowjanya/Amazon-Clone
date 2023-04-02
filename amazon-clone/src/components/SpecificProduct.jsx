import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./home.css"
import SpecificIndPro from './SpecificIndPro'
import { Box} from '@chakra-ui/react'
import Headers from '../Headers'
import HeaderBottom from './HeaderBottom'
import Footer from './Footer'


 let Filtered=[]


 function display(data,category){
  const filtereddata=data.filter((item)=>{
    // console.log("masai",item.category)
    // console.log("india",category.category)
    return item.category===category.category
  })
 
  Filtered=filtereddata
   console.log("hello",Filtered)
  //  filtereddata=Filtered
}
console.log("boom",Filtered)


function SpecificProduct() {
  const category=useParams()
  console.log(category)

   const handleClick=()=>{
    // let price=Filtered.map((ele,i)=>{
    //   if(ele.price==="asc"){
    //     Filtered.sort((a,b)=>{
    //       return a.price-b.price
          
    //      })
    //      console.log("asc")
    //   }else if (ele.value==="desc"){
    //     Filtered.sort((a,b)=>{
    //       return b.price-a.price
          
    //      })
    //      console.log("desc")
    //   }
    // })
    console.log()
  }




useEffect(()=>{
  fetch(`https://6422c67b77e7062b3e224e73.mockapi.io/products`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log("product",category)
    display(data,category)
  })
},[category])
  
  
  return (
    <Box>
      <Headers />
      <HeaderBottom />
     <select id="select" style={{padding:"5px 29px" ,margin:"15px"}} onChange={handleClick}>

      <option value="">price...</option>
      <option value="asc">Asending</option>
      <option value="desc">Desending</option>
     </select>
    <div className='responsive' >
      
     
      {Filtered?.map((item)=>{
           return <SpecificIndPro
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
    <Footer />
    </Box>
  )
}

export default SpecificProduct;