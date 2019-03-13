import {getRandomInteger} from './utils';
import getFilter from './get-filter';
// import {getTasks} from './get-task';
import taskData from './task-data';
import Task from './Task';

const filters = [
  {
    name: `ALL`,
    amount: getRandomInteger(5, 30),
    isChecked: true
  },
  {
    name: `OVERDUE`,
    amount: getRandomInteger(0, 20),
    isDisabled: true
  },
  {
    name: `TODAY`,
    amount: getRandomInteger(0, 10),
    isDisabled: true
  },
  {
    name: `FAVORITES`,
    amount: getRandomInteger(5, 20)
  },
  {
    name: `Repeating`,
    amount: getRandomInteger(20, 50)
  },
  {
    name: `Tags`,
    amount: getRandomInteger(15, 50)
  },
  {
    name: `ARCHIVE`,
    amount: getRandomInteger(30, 150)
  }
];

// Отрисовывает заголовки фильтров
const filterElement = document.querySelector(`.main__filter`);
filterElement.insertAdjacentHTML(`beforeend`, filters.map((filter) => getFilter(filter)).reduce((acc, item) => acc + item, ``));


// Отрисовывает карточки задач
const amountTasks = 7;
const cardsContainer = document.querySelector(`.board__tasks`);
const renderCards = (container, amount) => {
  const fragment = document.createDocumentFragment();
  const task = new Task(taskData);
  const template = task.template;
  container.innerHTML = template;
  // fragment.appendChild(template);
  // container.appendChild(fragment);

};
renderCards(cardsContainer, amountTasks);

// Устанавка слушателей событий на заголовки фильтров
const filterLabels = filterElement.querySelectorAll(`.filter__label`);
const filterLabelsArray = Array.from(filterLabels);

// Вешает обрабтчик на каждый label в цикле
const setListenersToLabels = () => {
  let i = 0;
  while (i < filterLabelsArray.length) {
    filterLabelsArray[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      cardsContainer.innerHTML = ``;
      renderCards(getRandomInteger(1, 7));
    });
    i += 1;
  }
};
setListenersToLabels();
