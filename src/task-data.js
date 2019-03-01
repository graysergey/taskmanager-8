export let taskData = {
  title: [
    `Изучить историю`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],

  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

  picture: `//picsum.photos/100/100/?r=${Math.random()}`,

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

  isRepeating: {
    'mo': false,
    'tu': true,
    'we': false,
    'th': false,
    'fr': true,
    'sa': false,
    'su': true,
  },
};
