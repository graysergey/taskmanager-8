import {getRandomBoolean} from './utils';

const data = {
  title: [
    `Изучить историю`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],

  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `cinema`,
    `repeat`,
    `intertaimant`,
  ]),

  picture: `//picsum.photos/100/100/?r=${Math.random()}`,

  color: new Set([
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ]),

  isRepeating: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },

  isFavorite: getRandomBoolean(),

  isDone: getRandomBoolean(),
};

export default (number) => [...Array(number)].map(() => data);
