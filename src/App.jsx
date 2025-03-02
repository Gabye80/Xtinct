import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Endangered from "./pages/endangered/Endangered";
import Extinct from "./pages/extinct/Extinct";
import Conservation from "./pages/Conservation/Conservation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/endangered" element={<Endangered/>}/>
        <Route path="/extinct" element={<Extinct/>}/>
        <Route path="/conservation" element={<Conservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;