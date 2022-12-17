const { CATEGORIES, MENUS } = require('./constants/condition.js');
const { Random } = require('@woowacourse/mission-utils');

class Recommend {
  #coachNames;
  #antiFoods;
  #categories;

  constructor(coachNames) {
    this.#coachNames = coachNames;
    this.#antiFoods = [];
    this.#categories = [];
  }

  setAntiFood(antiFoodArr) {
    this.#antiFoods.push(antiFoodArr);
  }

  getCategories() {
    return this.#categories;
  }

  recommandCategory() {
    while (true) {
      const randomCategoryNumber = Random.pickNumberInRange(1, 5);
      const recommendedCategory = CATEGORIES[randomCategoryNumber];

      if (this.categoryDuplicateCheck) {
        this.#categories.push(recommendedCategory);
        return;
      }
    }
  }

  categoryDuplicateCheck(recommendedCategory) {
    const duplicateCount = this.#categories.filter((category) => {
      return category === recommendedCategory;
    }).length;

    return duplicateCount < 2;
  }
}

module.exports = Recommend;
