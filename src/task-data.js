export let taskData = {
  title: [
    `This is example of new task, you can add picture, set date and time, add tags.`,
    `It is example of repeating task. It marks by wave.`,
    `This is card with missing deadline`,
  ][Math.floor(Math.random() * 3)],

  date: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

  picture: `//picsum.photos/100/100/?r=${Math.random()}`,

  tags: new Set([
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
