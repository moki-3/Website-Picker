import './App.css'
import Mainpage from './components/mainpage/Mainpage'
import MokiNotFound from './components/pageNotFound/mokiNotFound/MokiNotFound';
import { Route } from "wouter";

function App() {
  

  return (
    <>
      <Route path={"/"} component={Mainpage} />
      <Route path={"/pageNotFound/mokiNotFound"} component={MokiNotFound} />
    </>
    
  )
}

export default App
