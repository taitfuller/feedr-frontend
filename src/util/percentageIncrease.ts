const percentageIncrease = (newValue: number, oldValue: number): number =>
  Math.round(((newValue + oldValue) / oldValue - 1) * 100);

export default percentageIncrease;
