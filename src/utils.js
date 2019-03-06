const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const compareNumbers = () => 0.5 - Math.random();

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const sortRandomArray = (arr) => arr.slice(0).sort(compareNumbers);
export const getRandomBoolean = () => Math.random() >= 0.5;
export const getDate = (date) => `${date.getDate()} ${Months[date.getMonth()]}`;
export const getTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeOfDay = hours < 12 ? `AM` : `PM`;
  return `${hours % 12 < 10 ? `0${hours % 12}` : hours % 12}:${minutes < 10 ? `0${minutes}` : minutes} ${timeOfDay}`;
};
