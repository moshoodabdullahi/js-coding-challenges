const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
    return this.gear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
