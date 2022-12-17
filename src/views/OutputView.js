const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printRecommendStartMsg() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommendResult(result) {},
};

module.exports = OutputView;
