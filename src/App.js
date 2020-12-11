import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Importación de los componentes comunes */
import Header from "./components/shared/Header";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

/* Importación del resto de componentes */
import Welcome from "./components/Welcome";
import Mapa from "./components/mapa/Mapa";
import Userguide from "./components/Userguide";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Router>

        <Navbar />
    
        <Route exact path="/cartovis-react" component={Welcome} />
        <Route path="/cartovis-react/map" component={Mapa} />
        <Route path="/cartovis-react/userguide" component={Userguide} />
        <Route path="/cartovis-react/about" component={About} />

       </Router>
      <Footer />
    </div>
  );
}

export default App;
