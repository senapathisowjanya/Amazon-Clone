import './App.css';
import Headers from "./Headers"
import Home from "./components/Home"
import HeaderBottom from './components/HeaderBottom';
// import SlideShowFun from './components/SlideShowFun';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Headers />
      <HeaderBottom/>
      {/* <SlideShowFun /> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
