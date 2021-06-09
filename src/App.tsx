import React from "react";
import Carousel from "./Components/Carousel";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
