export enum PressureType {
  thirty = "30",
  hundred = "100",
  fourThousand = "4000",
  custom = "Custom"
}

/// ["30", "100", "4000", "Custom"]
export function getPressureLabels(): string[] {
  return Object.values(PressureType);
}

export function getPressureValue(pressureType: PressureType): number {
  switch (pressureType) {
    case PressureType.thirty:
      return 30;
    case PressureType.hundred:
      return 100;
    case PressureType.fourThousand:
      return 4000;
    default:
      // throw Error("❌ -> Invalid PressureType value.");
      return 0;
  }
}
