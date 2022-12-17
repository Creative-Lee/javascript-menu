const { Console } = require('@woowacourse/mission-utils');

const inputErrorHandler = (excution, reRequest) => {
  try {
    excution();
  } catch ({ message }) {
    Console.print(message);
    reRequest();
  }
};

module.exports = inputErrorHandler;
