export enum NpsType {
  twenty = "3⁄4 - 20",
  twentyFive = "1 - 25",
  thirtyTwo = "1 1⁄4 - 32",
  forty = "1 1⁄2 - 40",
  fifty = "2 - 50",
  sixtyFive = "2 1⁄2 - 65",
  eighty = "3 - 80",
  ninety = "3 1⁄2 - 90",
  oneHundred = "4 - 100",
  oneHundredAndFifteen = "4 1⁄2 - 115",
  oneHundredAndTwentyFive = "5 - 125",
  oneHundredAndFifty = "6 - 150",
  twoHundred = "8 - 200",
  twoHundredAndFifty = "10 - 250",
  threeHundred = "12 - 300",
  threeHundredAndFifty = "14 - 350",
  fourHundred = "16 - 400",
}

/// ["3⁄4 - 20", "1 - 25", "1 1⁄4 - 32", ...]
export function getNpsLabels(): string[] {
  return Object.values(NpsType);
}

export function getNpsValue(npsType: NpsType): number {
  switch (npsType) {
    case NpsType.twenty:
      return 20;
    case NpsType.twentyFive:
      return 25;
    case NpsType.thirtyTwo:
      return 32;
    case NpsType.forty:
      return 40;
    case NpsType.fifty:
      return 50;
    case NpsType.sixtyFive:
      return 65;
    case NpsType.eighty:
      return 80;
    case NpsType.ninety:
      return 90;
    case NpsType.oneHundred:
      return 100;
    case NpsType.oneHundredAndFifteen:
      return 115;
    case NpsType.oneHundredAndTwentyFive:
      return 125;
    case NpsType.oneHundredAndFifty:
      return 150;
    case NpsType.twoHundred:
      return 200;
    case NpsType.twoHundredAndFifty:
      return 250;
    case NpsType.threeHundred:
      return 300;
    case NpsType.threeHundredAndFifty:
      return 350;
    case NpsType.fourHundred:
      return 400;
  }
}
