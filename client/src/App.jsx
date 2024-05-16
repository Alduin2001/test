import Header from "./components/header";
import {Main} from "./components/main";
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    
    <BrowserRouter>
    <div className='w-full h-dvh flex flex-col'>
        <Header/>
        <Main/>
    </div>
    </BrowserRouter>
  )
}

export default App
