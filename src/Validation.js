class Validation {
  static validateCoachNames(coachNames) {
    const coachNameArr = coachNames.split(',');

    if (!Validation.#isValidCoachNameLength(coachNameArr)) {
      throw new Error('[ERROR] 코치 이름의 길이는 2~4글자 입니다.');
    }

    if (!Validation.#isValidCoachCount(coachNameArr)) {
      throw new Error('[ERROR] 코치는 2명에서 5명까지 입력 가능합니다.');
    }
  }

  static #isValidCoachNameLength(coachNameArr) {
    return coachNameArr.every((coachName) => 2 <= coachName.length && coachName.length <= 4);
  }

  static #isValidCoachCount(coachNameArr) {
    return 2 <= coachNameArr.length && coachNameArr.length <= 5;
  }
}

module.exports = Validation;
