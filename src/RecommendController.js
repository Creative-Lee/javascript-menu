const OutputView = require('./views/OutputView.js');

class RecommendController {
  play() {
    OutputView.printRecommendStartMsg();
  }
}

module.exports = RecommendController;
