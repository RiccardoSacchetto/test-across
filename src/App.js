import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import MainContainer from "./components/MainContainer"
import Home from "./components/Home"
import History from "./components/History"

function App() {

  return (
    <Router>
      <div className="container">
        <h1>GitHub users search</h1>
          <Routes>
            <Route exact path="/" element={<MainContainer active="home"><Home /></MainContainer>}/>
            <Route path="/history" element={<MainContainer active="history"><History /></MainContainer>}/>
          </Routes>

      </div>
    </Router>
  );
}

export default App;
