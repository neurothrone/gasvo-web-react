import React, {useState} from "react";

import {getNpsLabels, getNpsValue, NpsType} from "../lib/NpsType";

type CalculateFormProps = {
  onCalculate: (nps: number, length: number, pressure: number) => void;
  onReset: () => void;
};

function CalculateForm({onCalculate, onReset}: CalculateFormProps) {
  const [npsType, setNpsType] = useState<NpsType>(NpsType.twenty);
  const [lengthInput, setLengthInput] = useState<string | number>("");
  const [pressureInput, setPressureInput] = useState<string | number>("");

  const handleCalculate = () => {
    const npsValue = getNpsValue(npsType);
    onCalculate(npsValue, Number(lengthInput), Number(pressureInput));
  }

  const handleReset = () => {
    setLengthInput("");
    setPressureInput("");
    onReset();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleCalculate();
      }}
    >
      <label htmlFor="nps">
        <a href="https://en.wikipedia.org/wiki/Nominal_Pipe_Size#NPS_tables_for_selected_sizes">Nominal Pipe Size</a> |
        DN (mm)
      </label>
      <br/>
      <select
        defaultValue={npsType}
        onChange={(e => {
          const selectedNpsType: NpsType = e.target.value as NpsType;
          setNpsType(selectedNpsType);
        })}
      >
        {getNpsLabels().map(value => {
          return <option key={value} value={value}>{value}</option>
        })}
      </select>
      <br/>
      <br/>

      <label htmlFor="length">Length (m)</label>
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

      <label htmlFor="pressure">Pressure (mbar)</label>
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