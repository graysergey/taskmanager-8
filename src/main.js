'use strict';

const filterElement = document.querySelector(`.main__filter`);
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const getFilterElement = (name, amount, isChecked = false, isDisabled = false) => {
  const checkedAttribute = isChecked ? `checked` : ``;
  const disabledAttribute = isDisabled ? `disabled` : ``;
  const captionElement = name.toLowerCase();
  return `
    <input
      type="radio"
      id="filter__${captionElement}"
      class="filter__input visually-hidden"
      name="filter"
      ${checkedAttribute}
      ${disabledAttribute}
    />
    <label for="filter__${captionElement}" class="filter__label">
    ${name} <span class="filter__${captionElement}-count">${amount}</span></label>
  `;
};

const renderFilterElement = (name, amount, checked = false, disabled = false) => {
  return filterElement.insertAdjacentHTML(`beforeend`, getFilterElement(name, amount, checked, disabled));
};


renderFilterElement(`ALL`, getRandomNumber(5, 30), true);
renderFilterElement(`OVERDUE`, getRandomNumber(0, 20), false, true);
renderFilterElement(`TODAY`, getRandomNumber(0, 10), false, true);
renderFilterElement(`FAVORITES`, getRandomNumber(5, 20));
renderFilterElement(`Repeating`, getRandomNumber(20, 50));
renderFilterElement(`Tags`, getRandomNumber(15, 50));
renderFilterElement(`ARCHIVE`, getRandomNumber(30, 150));
