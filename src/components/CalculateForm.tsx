import React, {useState} from "react";

type CalculateFormProps = {
  onCalculate: (nps: number, length: number, pressure: number) => void;
};

function CalculateForm({onCalculate}: CalculateFormProps) {
  const [npsInput, setNpsInput] = useState<string | number>("");
  const [lengthInput, setLengthInput] = useState<string | number>("");
  const [pressureInput, setPressureInput] = useState<string | number>("");

  const handleCalculate = () => {
    onCalculate(Number(npsInput), Number(lengthInput), Number(pressureInput));
  }

  const handleReset = () => {
    setNpsInput("");
    setLengthInput("");
    setPressureInput("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCalculate();
      }}
    >
      <label htmlFor="nps">NPS</label>
      <br/>
      <input
        type="number"
        id="nps" value={npsInput}
        min={0}
        onChange={(e) => setNpsInput(e.target.valueAsNumber)}
      />
      <br/>
      <br/>

      <label htmlFor="length">Length</label>
      <br/>
      <input
        type="number"
        id="length"
        min={0}
        value={lengthInput}
        onChange={(e) => setLengthInput(e.target.valueAsNumber)}
      />
      <br/>
      <br/>

      <label htmlFor="pressure">Pressure</label>
      <br/>
      <input
        type="number"
        id="pressure"
        min={0}
        value={pressureInput}
        onChange={(e) => setPressureInput(e.target.valueAsNumber)}
      />
      <br/>
      <br/>

      <button type="submit">Calculate</button>
      <button
        type="button"
        onClick={handleReset}
      >Reset
      </button>
    </form>
  );
}

export default CalculateForm;