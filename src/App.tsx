import React, {useState} from 'react';

import CalculateForm from "./components/CalculateForm";
import GasvoCore from "./lib/GasvoCore";

function App() {
  const [gasVolume, setGasVolume] = useState<number>(0);

  const handleCalculate = (nps: number, length: number, pressure: number) => {
    const newGasVolume = GasvoCore.calculateGasVolume(nps, length, pressure);
    setGasVolume(newGasVolume);
  }

  return (
    <>
      <h1>GasVo</h1>
      <CalculateForm onCalculate={handleCalculate}/>
      <p>Gas Volume: {gasVolume.toFixed(3)}</p>
    </>
  );
}

export default App;
