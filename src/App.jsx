import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./Components/Produtos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contato from "./Components/Contato";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
