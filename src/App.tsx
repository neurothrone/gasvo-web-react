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
      <header className="text-center mt-3">
        <h1>GasVo</h1>
        <h2 className="text-secondary">Gas Pipe Volume Calculator</h2>
      </header>

      <main className="container">
        <CalculateForm onCalculate={handleCalculate} onReset={() => setGasVolume(0)}/>

        <div className="text-center my-3">
          <p className="fs-3 mb-0">Gas Volume (m<sup>3</sup>)</p>
          <p className="display-3 fw-bold">{getGasVolume()}</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
