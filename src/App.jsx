import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Endangered from "./pages/endangered/Endangered";
import Extinct from "./pages/extinct/Extinct";
import Conservation from "./pages/Conservation/Conservation";
import "./i18n";
import Terms from "./pages/terms/Terms";
import Suggestions from "./pages/suggestions/Suggestions";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="https://xtinct-79302.web.app" element={<Home/>}/>
        <Route path="/endangered" element={<Endangered/>}/>
        <Route path="/extinct" element={<Extinct/>}/>
        <Route path="/conservation" element={<Conservation/>}/>
        <Route path="/terms-and-services" element={<Terms/>}/>
        <Route path="/suggestions" element={<Suggestions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;