import { Routes, Route} from "react-router-dom";
import Home from "./views/home/home";
import './App.css'

function App() {

  return (
    <div className="border border-red-400 border-solid h-max w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
  
}

export default App
