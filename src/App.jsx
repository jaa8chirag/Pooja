import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./user/Layout/UserLayout";

import Home from "./user/Pages/Home";
import Puja from "./user/Pages/Puja";
import Katha from "./user/Pages/Katha";
import Products from "./user/Pages/Products";
import Gallery from "./user/Pages/Gallery";
import Pind_Dan from "./user/Pages/Pind_Dan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/puja" element={<Puja />} />
          <Route path="/katha" element={<Katha />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pind_dan" element={<Pind_Dan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
