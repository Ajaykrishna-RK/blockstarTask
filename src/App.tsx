import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HeadTail from "./pages/HeadTail/HeadTail";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className=" p-[10px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/headtail" element={<HeadTail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
