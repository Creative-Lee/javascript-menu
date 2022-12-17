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
      inputErrorHandler(
        () => this.#nameSavePhase(coachNames),
        () => this.#requestCoachName()
      );
    });
  }

  #nameSavePhase(coachNames) {
    Validation.validateCoachNames(coachNames);

    this.#recommand = new Recommend(coachNames.split(','));
  }
}

module.exports = RecommendController;
