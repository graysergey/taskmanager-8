import {getRandomInteger} from './utils';
import getFilter from './get-filter';
// import {getTasks} from './get-task';
import tasksData from './task-data';
import Task from './Task';
import TaskEdit from './Task-edit';

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
const renderCards = (tasks, container) => {
  const fragment = document.createDocumentFragment();
  tasks.forEach((item) => {
    const task = new Task(item);
    fragment.appendChild(task.render());
  });
  container.appendChild(fragment);
};
renderCards(tasksData(amountTasks), cardsContainer);

// const renderCardsEdit = (tasks, container) => {
//   const fragment = document.createDocumentFragment();
//   tasks.forEach((item) => {
//     const task = new TaskEdit(item);
//     fragment.appendChild(task.render());
//   });
//   container.appendChild(fragment);
// };
// renderCardsEdit(tasksData(amountTasks), cardsContainer);

// Устанавка слушателей событий на заголовки фильтров
// const filterLabels = filterElement.querySelectorAll(`.filter__label`);
// const filterLabelsArray = Array.from(filterLabels);

// // Вешает обрабтчик на каждый label в цикле
// const setListenersToLabels = () => {
//   let i = 0;
//   while (i < filterLabelsArray.length) {
//     filterLabelsArray[i].addEventListener(`click`, (evt) => {
//       evt.preventDefault();
//       cardsContainer.innerHTML = ``;
//       renderCards(getRandomInteger(1, 7));
//     });
//     i += 1;
//   }
// };
// setListenersToLabels();
