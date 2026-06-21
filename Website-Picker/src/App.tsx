import './App.css'
import Mainpage from './components/mainpage/Mainpage'
import MokiNotFound from './components/pageNotFound/mokiNotFound/MokiNotFound';
import Impressum from './components/legal/impressum/Impressum';
import { Route } from "wouter";

function App() {
  

  return (
    <>
      <Route path={"/"} component={Mainpage} />
      <Route path={"/pageNotFound/mokiNotFound"} component={MokiNotFound} />
      <Route path={"/legal/imprint"} component={Impressum} />
    </>
    
  )
}

export default App
