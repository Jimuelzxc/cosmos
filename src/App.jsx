import "./App.css";
import MainPage from "./Pages/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/cosmos/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
