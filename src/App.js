import "./App.css";
import HeadBar from "./components/HeadBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="main_background">
        <HeadBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
