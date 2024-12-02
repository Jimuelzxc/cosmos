import "./App.css";
import MainPage from "./Pages/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
