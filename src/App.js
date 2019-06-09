import React from "react";
import "./custom.scss";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <section class="product">
        <div class="product-background bounce-in-left" />
        <h1 class="product-title">
          Pour le retour des farmers chocolat noir banane!
        </h1>
      </section>

      <section className="story">
        <h1>pourquoi c'était bien?</h1>
      </section>
      <section className="action">
        <h1>comment nous aider?</h1>
      </section>
    </div>
  );
}

export default App;
