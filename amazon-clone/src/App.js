import './App.css';
import Headers from "./Headers"
import Home from "./components/Home"
import HeaderBottom from './components/HeaderBottom';
// import SlideShowFun from './components/SlideShowFun';


function App() {
  return (
    <div className="App">
      <Headers />
      <HeaderBottom/>
      {/* <SlideShowFun /> */}
      <Home/>
    </div>
  );
}

export default App;
