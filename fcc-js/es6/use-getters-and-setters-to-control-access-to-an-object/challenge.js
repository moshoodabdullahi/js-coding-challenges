class Thermostat {
  constructor(fahrenheit) {
    this.constructorFahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.constructorFahrenheit - 32);
  }

  set temperature(celsius) {
    this.constructorFahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
