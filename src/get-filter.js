// функция шаблон заголовка фильтра
export default ({name, amount, isChecked = false, isDisabled = false}) => {
  const checkedAttribute = isChecked ? `checked` : ``;
  const disabledAttribute = isDisabled ? `disabled` : ``;
  const elementCaption = name.toLowerCase();
  return `
    <input
      type="radio"
      id="filter__${elementCaption}"
      class="filter__input visually-hidden"
      name="filter"
      ${checkedAttribute}
      ${disabledAttribute}
    />
    <label for="filter__${elementCaption}" class="filter__label">
    ${name} <span class="filter__${elementCaption}-count">${amount}</span></label>
  `;
};
