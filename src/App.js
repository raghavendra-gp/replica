import "./App.css";
import CarouselPage from "./components/CarouselPage";

import Footer from "./components/Footer";
import HeadBar from "./components/HeadBar";

import SubContent from "./components/SubContent";

function App() {
  return (
    <div className="App">
      <div>
        <HeadBar />
        <CarouselPage />
        {/* <MainContent /> */}
      </div>
      <SubContent />
      <Footer />
    </div>

    // selfi page
    // <div className="App">
    //   {/* <Selfi /> */}
    // </div>
  );
}

export default App;
