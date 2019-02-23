/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Отрисовывает заголовки фильтров\n\n\nconst filterElement = document.querySelector(`.main__filter`);\nconst getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);\n\nconst filters = [\n  {\n    name: `ALL`,\n    amount: getRandomNumber(5, 30),\n    isChecked: true\n  },\n  {\n    name: `OVERDUE`,\n    amount: getRandomNumber(0, 20),\n    isDisabled: true\n  },\n  {\n    name: `TODAY`,\n    amount: getRandomNumber(0, 10),\n    isDisabled: true\n  },\n  {\n    name: `FAVORITES`,\n    amount: getRandomNumber(5, 20)\n  },\n  {\n    name: `Repeating`,\n    amount: getRandomNumber(20, 50)\n  },\n  {\n    name: `Tags`,\n    amount: getRandomNumber(15, 50)\n  },\n  {\n    name: `ARCHIVE`,\n    amount: getRandomNumber(30, 150)\n  }\n];\n\n// функция шаблон заголовка фильтра\nconst getFilterElement = ({name, amount, isChecked = false, isDisabled = false}) => {\n  const checkedAttribute = isChecked ? `checked` : ``;\n  const disabledAttribute = isDisabled ? `disabled` : ``;\n  const elementCaption = name.toLowerCase();\n  return `\n    <input\n      type=\"radio\"\n      id=\"filter__${elementCaption}\"\n      class=\"filter__input visually-hidden\"\n      name=\"filter\"\n      ${checkedAttribute}\n      ${disabledAttribute}\n    />\n    <label for=\"filter__${elementCaption}\" class=\"filter__label\">\n    ${name} <span class=\"filter__${elementCaption}-count\">${amount}</span></label>\n  `;\n};\n\nfilterElement.insertAdjacentHTML(`beforeend`, filters.map((filter) => getFilterElement(filter)).reduce((acc, item) => acc + item, ``));\n\n\n// Отрисовывает карточки задач\n\nconst cardsContainer = document.querySelector(`.board__tasks`);\n\n// Возвращает шаблонную строку - разметки карточки\nconst getCard = () => {\n  return `\n    <article class=\"card card--pink card--repeat\">\n      <form class=\"card__form\" method=\"get\">\n        <div class=\"card__inner\">\n          <div class=\"card__control\">\n            <button type=\"button\" class=\"card__btn card__btn--edit\">\n              edit\n            </button>\n            <button type=\"button\" class=\"card__btn card__btn--archive\">\n              archive\n            </button>\n            <button\n              type=\"button\"\n              class=\"card__btn card__btn--favorites card__btn--disabled\"\n            >\n              favorites\n            </button>\n          </div>\n\n          <div class=\"card__color-bar\">\n            <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n              <use xlink:href=\"#wave\"></use>\n            </svg>\n          </div>\n\n          <div class=\"card__textarea-wrap\">\n            <label>\n              <textarea\n                class=\"card__text\"\n                placeholder=\"Start typing your text here...\"\n                name=\"text\"\n              >\n    It is example of repeating task. It marks by wave.</textarea\n              >\n            </label>\n          </div>\n\n          <div class=\"card__settings\">\n            <div class=\"card__details\">\n              <div class=\"card__dates\">\n                <button class=\"card__date-deadline-toggle\" type=\"button\">\n                  date: <span class=\"card__date-status\">no</span>\n                </button>\n\n                <fieldset class=\"card__date-deadline\" disabled>\n                  <label class=\"card__input-deadline-wrap\">\n                    <input\n                      class=\"card__date\"\n                      type=\"text\"\n                      placeholder=\"23 September\"\n                      name=\"date\"\n                    />\n                  </label>\n                  <label class=\"card__input-deadline-wrap\">\n                    <input\n                      class=\"card__time\"\n                      type=\"text\"\n                      placeholder=\"11:15 PM\"\n                      name=\"time\"\n                    />\n                  </label>\n                </fieldset>\n\n                <button class=\"card__repeat-toggle\" type=\"button\">\n                  repeat:<span class=\"card__repeat-status\">no</span>\n                </button>\n\n                <fieldset class=\"card__repeat-days\" disabled>\n                  <div class=\"card__repeat-days-inner\">\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-mo-2\"\n                      name=\"repeat\"\n                      value=\"mo\"\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-mo-2\"\n                      >mo</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-tu-2\"\n                      name=\"repeat\"\n                      value=\"tu\"\n                      checked\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-tu-2\"\n                      >tu</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-we-2\"\n                      name=\"repeat\"\n                      value=\"we\"\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-we-2\"\n                      >we</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-th-2\"\n                      name=\"repeat\"\n                      value=\"th\"\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-th-2\"\n                      >th</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-fr-2\"\n                      name=\"repeat\"\n                      value=\"fr\"\n                      checked\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-fr-2\"\n                      >fr</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      name=\"repeat\"\n                      value=\"sa\"\n                      id=\"repeat-sa-2\"\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-sa-2\"\n                      >sa</label\n                    >\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-su-2\"\n                      name=\"repeat\"\n                      value=\"su\"\n                      checked\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-su-2\"\n                      >su</label\n                    >\n                  </div>\n                </fieldset>\n              </div>\n\n              <div class=\"card__hashtag\">\n                <div class=\"card__hashtag-list\">\n                  <span class=\"card__hashtag-inner\">\n                    <input\n                      type=\"hidden\"\n                      name=\"hashtag\"\n                      value=\"repeat\"\n                      class=\"card__hashtag-hidden-input\"\n                    />\n                    <button type=\"button\" class=\"card__hashtag-name\">\n                      #repeat\n                    </button>\n                    <button type=\"button\" class=\"card__hashtag-delete\">\n                      delete\n                    </button>\n                  </span>\n\n                  <span class=\"card__hashtag-inner\">\n                    <input\n                      type=\"hidden\"\n                      name=\"hashtag\"\n                      value=\"repeat\"\n                      class=\"card__hashtag-hidden-input\"\n                    />\n                    <button type=\"button\" class=\"card__hashtag-name\">\n                      #cinema\n                    </button>\n                    <button type=\"button\" class=\"card__hashtag-delete\">\n                      delete\n                    </button>\n                  </span>\n\n                  <span class=\"card__hashtag-inner\">\n                    <input\n                      type=\"hidden\"\n                      name=\"hashtag\"\n                      value=\"repeat\"\n                      class=\"card__hashtag-hidden-input\"\n                    />\n                    <button type=\"button\" class=\"card__hashtag-name\">\n                      #entertaiment\n                    </button>\n                    <button type=\"button\" class=\"card__hashtag-delete\">\n                      delete\n                    </button>\n                  </span>\n                </div>\n\n                <label>\n                  <input\n                    type=\"text\"\n                    class=\"card__hashtag-input\"\n                    name=\"hashtag-input\"\n                    placeholder=\"Type new hashtag here\"\n                  />\n                </label>\n              </div>\n            </div>\n\n            <label class=\"card__img-wrap card__img-wrap--empty\">\n              <input\n                type=\"file\"\n                class=\"card__img-input visually-hidden\"\n                name=\"img\"\n              />\n              <img\n                src=\"img/add-photo.svg\"\n                alt=\"task picture\"\n                class=\"card__img\"\n              />\n            </label>\n\n            <div class=\"card__colors-inner\">\n              <h3 class=\"card__colors-title\">Color</h3>\n              <div class=\"card__colors-wrap\">\n                <input\n                  type=\"radio\"\n                  id=\"color-black-2\"\n                  class=\"card__color-input card__color-input--black visually-hidden\"\n                  name=\"color\"\n                  value=\"black\"\n                />\n                <label\n                  for=\"color-black-2\"\n                  class=\"card__color card__color--black\"\n                  >black</label\n                >\n                <input\n                  type=\"radio\"\n                  id=\"color-yellow-2\"\n                  class=\"card__color-input card__color-input--yellow visually-hidden\"\n                  name=\"color\"\n                  value=\"yellow\"\n                />\n                <label\n                  for=\"color-yellow-2\"\n                  class=\"card__color card__color--yellow\"\n                  >yellow</label\n                >\n                <input\n                  type=\"radio\"\n                  id=\"color-blue-2\"\n                  class=\"card__color-input card__color-input--blue visually-hidden\"\n                  name=\"color\"\n                  value=\"blue\"\n                />\n                <label\n                  for=\"color-blue-2\"\n                  class=\"card__color card__color--blue\"\n                  >blue</label\n                >\n                <input\n                  type=\"radio\"\n                  id=\"color-green-2\"\n                  class=\"card__color-input card__color-input--green visually-hidden\"\n                  name=\"color\"\n                  value=\"green\"\n                />\n                <label\n                  for=\"color-green-2\"\n                  class=\"card__color card__color--green\"\n                  >green</label\n                >\n                <input\n                  type=\"radio\"\n                  id=\"color-pink-2\"\n                  class=\"card__color-input card__color-input--pink visually-hidden\"\n                  name=\"color\"\n                  value=\"pink\"\n                  checked\n                />\n                <label\n                  for=\"color-pink-2\"\n                  class=\"card__color card__color--pink\"\n                  >pink</label\n                >\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card__status-btns\">\n            <button class=\"card__save\" type=\"submit\">save</button>\n            <button class=\"card__delete\" type=\"button\">delete</button>\n          </div>\n        </div>\n      </form>\n    </article>\n  `;\n};\n\nconst amountCards = 7;\nconst renderCards = (amount) => {\n  cardsContainer.insertAdjacentHTML(`beforeend`, getCard().repeat(amount));\n};\nrenderCards(amountCards);\n\n// Устанавка слушателей событий на заголовки фильтров\n\nconst filterLabels = filterElement.querySelectorAll(`.filter__label`);\nconst filterLabelsArray = Array.from(filterLabels);\n\n// Вешает обрабтчик на каждый label в цикле\nconst setListenersToLabels = () => {\n  let i = 0;\n  while (i < filterLabelsArray.length) {\n    filterLabelsArray[i].addEventListener(`click`, (evt) => {\n      evt.preventDefault();\n      cardsContainer.innerHTML = ``;\n      renderCards(getRandomNumber(1, 7));\n    });\n    i += 1;\n  }\n};\nsetListenersToLabels();\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });