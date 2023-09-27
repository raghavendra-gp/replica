import "./App.css";
import Footer from "./components/Footer";
import HeadBar from "./components/HeadBar";
import MainContent from "./components/MainContent";
import SubContent from "./components/SubContent";

function App() {
  return (
    <div className="App">
      <div className="main_background">
        <HeadBar />
        <MainContent />
      </div>
      <SubContent />
      <Footer />
    </div>
  );
}

export default App;
