import React, {useState} from "react";

import {getNpsLabels, getNpsValue, NpsType} from "../lib/NpsType";
import {getPressureLabels, PressureType} from "../lib/PressureType";

type CalculateFormProps = {
  onCalculate: (nps: number, length: number, pressure: number) => void;
  onReset: () => void;
};

function CalculateForm({onCalculate, onReset}: CalculateFormProps) {
  const [npsType, setNpsType] = useState<NpsType>(NpsType.twenty);
  const [lengthInput, setLengthInput] = useState<string | number>("");
  const [pressureType, setPressureType] = useState<PressureType>(PressureType.thirty);
  const [pressureInput, setPressureInput] = useState<string | number>(pressureType);

  const handleCalculate = () => {
    const npsValue = getNpsValue(npsType);
    onCalculate(npsValue, Number(lengthInput), Number(pressureInput));
  }

  const handleReset = () => {
    setLengthInput("");
    if (pressureType === PressureType.custom) {
      setPressureInput("");
    }
    onReset();
  }

  function isValid(): boolean {
    return lengthInput !== "" && pressureInput !== "";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleCalculate();
      }}
    >
      {/* region NPS Select */}
      <div className="mb-3">
        <label
          className="form-label"
          htmlFor="nps"
        >
          <a
            className="text-decoration-none interactive-element"
            href="https://en.wikipedia.org/wiki/Nominal_Pipe_Size#NPS_tables_for_selected_sizes"
          >Nominal Pipe Size</a> | DN (mm)
        </label>
        <select
          className="form-select mb-3"
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
      </div>
      {/* endregion */}

      {/* region Length Input */}
      <div className="mb-3">
        <label
          className="form-label"
          htmlFor="length"
        >
          Length (m)
        </label>
        <input
          className="form-control"
          id="length"
          type="number"
          placeholder="Type in a length"
          min={0}
          value={lengthInput.toString()}
          onChange={(e) => setLengthInput(e.target.value)}
        />
      </div>
      {/* endregion */}

      {/* region Pressure Select/Input */}
      <div className="mb-3">
        <label
          className="form-label"
          htmlFor="nps"
        >
          Pressure (mbar)
        </label>
        <select
          className="form-select mb-3"
          defaultValue={pressureType}
          onChange={(e => {
            const selectedPressureType: PressureType = e.target.value as PressureType;
            setPressureType(selectedPressureType);

            const pressureInput = selectedPressureType === PressureType.custom ? "" : Number(selectedPressureType);
            setPressureInput(pressureInput);
          })}
        >
          {getPressureLabels().map(value => {
            return <option key={value} value={value}>{value}</option>
          })}
        </select>
      </div>
      {pressureType === PressureType.custom && (
        <div className="mb-3">
          <input
            className="form-control"
            id="pressure"
            type="number"
            placeholder="Type in a pressure"
            min={0}
            value={pressureInput.toString()}
            onChange={(e) => setPressureInput(e.target.value)}
          />
        </div>
      )}
      {/* endregion */}

      {/* region Buttons */}
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!isValid()}
      >
        Calculate
      </button>
      <button
        className="btn btn-secondary float-end"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
      {/* endregion */}
    </form>
  );
}

export default CalculateForm;