import './App.css';
// import Headers from "./Headers"

// import HeaderBottom from './components/HeaderBottom';
// import Footer from "./components/Footer";
import AllRoutes from './components/AllRoutes';
// import SpecificProduct from './components/SpecificProduct';
// import IndivualProductPage from './components/IndivualProductPage';





function App() {
 
  return (
    <div className="App">
    
      {/* <Headers />
      <HeaderBottom/>
     */}
      <AllRoutes/>
      {/* <IndivualProductPage /> */}
      {/* <Footer/> */}
     </div>
  );
}

export default App;

// export async function getServerSideProps(context){
  
//   const products=await fetch(`https://6422c67b77e7062b3e224e73.mockapi.io/products`).then(
//     (res)=>res.json()
//     );
   

//   return {
//     props:{
//       products,
//     },
  
//   }
// }
// console.log("do",getServerSideProps())