import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./Components/Produtos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
