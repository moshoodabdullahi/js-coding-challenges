const bicycle = {
  gear: 2,
  setGear(newGear) {
    return (this.gear = newGear);
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
