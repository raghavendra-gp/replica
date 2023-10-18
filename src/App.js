import "./App.css";
import HeadBar from "./components/HeadBar";
import CarouselPage from "./components/CarouselPage";
import SubContent from "./components/SubContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <HeadBar />
        <CarouselPage />
      </div>

      <SubContent />
      <Footer />
    </div>
  );
}

export default App;
