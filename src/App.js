import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeadBar from "./components/HeadBar";
import CarouselPage from "./components/CarouselPage";
import SubContent from "./components/SubContent";
import Footer from "./components/Footer";
import Letters from "./components/Letters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/letters" element={<Letters />} />
      </Routes>
    </div>
  );
}

const MainContent = () => (
  <>
    <HeadBar />
    <CarouselPage />
    <SubContent />
    <Footer />
  </>
);

export default App;
