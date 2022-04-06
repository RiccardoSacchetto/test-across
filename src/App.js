import './App.css';
import {Routes, Route} from "react-router-dom"
import MainContainer from "./components/MainContainer"
import Home from "./components/Home"
import History from "./components/History"


function App() {

  return (
    <div className="container">
      <h1>GitHub users search</h1>
        <Routes>
          <Route exact path="/" element={<MainContainer active="home"><Home /></MainContainer>}/>
          <Route path="/history" element={<MainContainer active="history"><History /></MainContainer>}/>
        </Routes>

    </div>
  );
}

export default App;
