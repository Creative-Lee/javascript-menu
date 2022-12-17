const OutputView = require('./views/OutputView.js');
const InputView = require('./views/InputView.js');
const inputErrorHandler = require('./utils/inputErrorHandler.js');

class RecommendController {
  play() {
    OutputView.printRecommendStartMsg();

    this.#requestCoachName();
  }

  #requestCoachName() {
    InputView.readCoachName((coachName) => {});
  }
}

module.exports = RecommendController;
