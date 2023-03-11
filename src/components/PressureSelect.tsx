import {getPressureLabels, PressureType} from "../lib/PressureType";

type PressureSelectProps = {
  pressureType: PressureType;
  onPressureClick: (pressureType: PressureType) => void;
  className?: string;
}

function PressureSelect({pressureType, onPressureClick, className}: PressureSelectProps) {

  const getClass = (p: PressureType) => p === pressureType ? "btn-primary" : "btn-outline-primary";

  return (
    <div>
      {getPressureLabels().map(pressureValue => (
        <button
          className={className + " w-25 btn " + getClass(pressureValue as PressureType)}
          key={pressureValue}
          onClick={() => onPressureClick(pressureValue as PressureType)}
        >{pressureValue}
        </button>
      ))}
    </div>
  );
}

export default PressureSelect;