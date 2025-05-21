import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./homepage";     
import Login from "./loginpage"; 
import Category from "./categorypage"; 
import Category1 from "./category1"; 
import Category2 from "./category2"; 
import Category3 from "./category3"; 
import Payment from "./paymentpage";
import Successfull from "./successfulpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/cat-1" element={<Category1 />} />
        <Route path="/cat-2" element={<Category2 />} />
        <Route path="/cat-3" element={<Category3 />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/success" element={<Successfull />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
