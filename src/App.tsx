import Navbar from "./components/Navbar";


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import  NotFound from "./pages/NotFound";
import { Search } from "./pages/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/404" element={<NotFound/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<NotFound />} />
      </ Routes>   
      </BrowserRouter>
      

    </div>
  
  );
}

export default App;
