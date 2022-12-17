class Recommend {
  #coachNames;
  #antiFoods;

  constructor(coachNames) {
    this.#coachNames = coachNames;
    this.#antiFoods = [];
  }

  setAntiFood(antiFoodArr) {
    this.#antiFoods.push(antiFoodArr);
  }
}

module.exports = Recommend;
