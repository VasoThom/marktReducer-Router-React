import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Datenschutz from "./views/Datenschutz";
import Impressum from "./views/Impressum";
import "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header countProducts={0} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:product_id" element={<Product />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
