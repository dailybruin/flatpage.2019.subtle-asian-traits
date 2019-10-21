import React from 'react';
import Header from "./components/Header";
import './App.css';

const App: React.FC = () => {
  return (
    <Header
      imageURL="https://media.treehugger.com/assets/images/2016/07/green-forest-trees.jpg.860x0_q70_crop-scale.jpg"
      title="Subtle Asian Traits"
      author="Kaia Sherry"
    />
  );
}

export default App;
