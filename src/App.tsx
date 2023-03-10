import React, {useState} from 'react';

import CalculateForm from "./components/CalculateForm";
import GasvoCore from "./lib/GasvoCore";
import Footer from "./components/Footer";

function App() {
  const [gasVolume, setGasVolume] = useState<number>(0);

  const handleCalculate = (nps: number, length: number, pressure: number) => {
    const newGasVolume = GasvoCore.calculateGasVolume(nps, length, pressure);
    setGasVolume(newGasVolume);
  }

  const getGasVolume = () => gasVolume === 0 ? gasVolume.toFixed(0) : gasVolume.toFixed(3);

  return (
    <>
      <h1>GasVo</h1>
      <h2>Gas Pipe Volume Calculator</h2>
      <CalculateForm onCalculate={handleCalculate} onReset={() => setGasVolume(0)}/>
      <h3>Gas Volume (m<sup>3</sup>)</h3>
      <p>{getGasVolume()}</p>

      <Footer/>
    </>
  );
}

export default App;
