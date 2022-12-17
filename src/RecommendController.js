const OutputView = require('./views/OutputView.js');
const InputView = require('./views/InputView.js');
const Validation = require('./Validation.js');
const Recommend = require('./Recommend.js');
const inputErrorHandler = require('./utils/inputErrorHandler.js');

class RecommendController {
  #recommand;

  play() {
    OutputView.printRecommendStartMsg();

    this.#requestCoachName();
  }

  #requestCoachName() {
    InputView.readCoachName((coachNames) => {
      const isValidInput = inputErrorHandler(Validation.validateCoachNames, coachNames);

      if (!isValidInput) {
        this.#requestCoachName();
        return;
      }

      this.#nameSavePhase(coachNames);
    });
  }

  #nameSavePhase(coachNames) {
    const coachNameArr = coachNames.split(',');

    this.#recommand = new Recommend(coachNameArr);

    this.#requestAntiFood(coachNameArr);
  }

  #requestAntiFood(coachNameArr) {
    coachNameArr.forEach((coachName) => {
      InputView.readAntiFood(coachName, (antiFood) => {
        const isValidInput = inputErrorHandler(Validation.validateAntiFood, antiFood);

        if (!isValidInput) {
          this.#requestAntiFood(coachNameArr);
          return;
        }

        const remainCoachArr = coachNameArr.slice(1);
        this.#antiFoodSavePhase(antiFood, remainCoachArr);
      });
    });
  }

  #antiFoodSavePhase(antiFood, remainCoachArr) {
    console.log(`성공!!!${antiFood}`);

    if (remainCoachArr.length) {
      this.#requestAntiFood(remainCoachArr);
    }
  }
}

module.exports = RecommendController;
