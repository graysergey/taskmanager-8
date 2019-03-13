import {sortRandomArray, getRandomBoolean, getDate, getTime} from './utils';

export default class Task {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._color = data.color;
    this._isRepeating = data.isRepeating;
    this._picture = data.picture;

    this._state = {
      isEdit: false
    };
  }

  get template() {
    const color = sortRandomArray([...this._color]).slice(0, 1);
    const isRepeat = getRandomBoolean();
    const cardRepeat = () => isRepeat ? `card--repeat` : ``;
    const dueDate = this._dueDate ? new Date(this._dueDate) : null;
    const isOverdue = getDate < Date.now() ? `card--deadline` : ``;
    const isImg = getRandomBoolean() ? `card__img-wrap--empty` : ``;
    const repeatDay = Object.keys(this._isRepeating);

    const cardControls = `<div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
      archive
    </button>
    <button
      type="button"
      class="card__btn card__btn--favorites card__btn--disabled"
    >
      favorites
    </button>
    </div>`;

    const colorBar = `<div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>`;

    const textArea = `<div class="card__textarea-wrap">
    <label>
      <textarea
        class="card__text"
        placeholder="Start typing your text here..."
        name="text">${this._title}</textarea>
    </label>
    </div>`;

    // перебирает хештеги, возвращает разметку
    const getHashTagsMarkup = () => {
      let hashTags = sortRandomArray([...this._tags]).slice(0, 3)
      .map((it) => {
        return `
          <li class="card__hashtag-inner">
            <input
              type="hidden"
              name="hashtag"
              value="repeat"
              class="card__hashtag-hidden-input"
            />
            <button type="button" class="card__hashtag-name">
              #${it}
            </button>
            <button type="button" class="card__hashtag-delete">
              delete
            </button>
          </li>
        `;
      }).reduce((acc, item) => acc + item, ``);

      return hashTags;
    };

    const hashtags = `<div class="card__hashtag">
    <ul class="card__hashtag-list">
      ${getHashTagsMarkup()}
    </ul>

    <label>
      <input
        type="text"
        class="card__hashtag-input"
        name="hashtag-input"
        placeholder="Type new hashtag here"
      />
    </label>
    </div>`;

    // перебирает цвета, возвращает разметку
    const getColorMarkup = () => {
      return `
        <input
          type="radio"
          id="color-${color}-2"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          checked
        />
        <label
          for="color-${color}-2"
          class="card__color card__color--${color}"
          >${color}</label
        >
      `;
    };

    // перебирает дни недели (встраивает в разметку)
    const getMarkupRepeatingTask = () => {
      return repeatDay.map((day) =>
        `<input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-${day.toLowerCase()}-2"
          name="repeat"
          value="${day.toLowerCase()}"
          ${this._isRepeating[day] ? `checked` : ``}
        />
        <label class="card__repeat-day" for="repeat-${day.toLowerCase()}-2"
          >${day.toLowerCase()}</label
        >`
      ).join(``);
    };

    const dateDedline = `<fieldset class="card__date-deadline" disabled>
    <label class="card__input-deadline-wrap">
      <input
        class="card__date"
        type="text"
        value="${getDate(dueDate)}"
        name="date"
      />
    </label>
    <label class="card__input-deadline-wrap">
      <input
        class="card__time"
        type="text"
        value="${getTime(dueDate)}"
        name="time"
      />
    </label>
    </fieldset>`;

    const details = `<div class="card__details">
    <div class="card__dates">
    <button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${dueDate ? `yes` : `no`}</span>
    </button>
      ${dateDedline}
    <button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${isRepeat ? `yes` : `no`}</span>
    </button>

    <fieldset class="card__repeat-days" disabled>
      <div class="card__repeat-days-inner">
        ${getMarkupRepeatingTask()}
      </div>
    </fieldset>
    </div>

    ${hashtags}
    </div>`;

    const imgWrap = `<label class="card__img-wrap ${isImg}">
    <input
      type="file"
      class="card__img-input visually-hidden"
      name="img"
    />
    <img
      src="${this._picture}"
      alt="task picture"
      class="card__img"
    />
    </label>`;


    // Возвращает шаблонную строку - разметки карточки (задачи)
    return `
      <article class="card card--${color} ${cardRepeat()} ${isOverdue}">
        <form class="card__form" method="get">
          <div class="card__inner">
            ${cardControls}

            ${colorBar}

            ${textArea}

            <div class="card__settings">
              ${details}

              ${imgWrap}

              <div class="card__colors-inner">
                <h3 class="card__colors-title">Color</h3>
                <div class="card__colors-wrap">
                  ${getColorMarkup()}
                </div>
              </div>
            </div>

            <div class="card__status-btns">
              <button class="card__save" type="submit">save</button>
              <button class="card__delete" type="button">delete</button>
            </div>
          </div>
        </form>
      </article>
    `;
  }
}
