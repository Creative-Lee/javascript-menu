class Validation {
  static validateCoachNames(coachNames) {
    const coachNameArr = coachNames.split(',');

    if (!Validation.#isValidCoachNameLength(coachNameArr)) {
      throw new Error('[ERROR] 코치 이름의 길이는 2~4글자 입니다.');
    }
  }

  static #isValidCoachNameLength(coachNameArr) {
    return coachNameArr.every((coachName) => 2 <= coachName.length && coachName.length <= 4);
  }
}

module.exports = Validation;
