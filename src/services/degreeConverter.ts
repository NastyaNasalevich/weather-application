const coefficientToKilometer = 3.6;

export const toKPH = (speed: number): number => {
  return speed * coefficientToKilometer;
}

export const degToCompass = (deg: number): string => {
  var val = Math.floor((deg / 22.5) + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[(val % 16)];
};