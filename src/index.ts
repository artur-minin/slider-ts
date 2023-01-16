import "./style.css";

import { Slider } from "./Slider";
import { SliderOptions } from "./types";

/**
 * Задача:
 * Реализовать слайдер при помощи CSS(SCSS) и Javascript
 * Слайдер принимает несколько параметров при инициализации и возвращает инстанс слайдера
 * При достижении последнего слайда слайдер завершает свою работу
 *
 * Пример готового результата:
 * {@link https://www.loom.com/share/0e58938fa84941ef971a505ce3cdd1a0}
 *
 * Основные критерии:
 * * Реализовать класс/функцию Slider, которая будет инициализировать слайдер
 * * Класс/функция будет принимать несколько параметров, описанных ниже
 * * Анимация слайдера максимально простая - swipe
 * * При достижении последнего слайда слайдер завершает свою работу -
 *   последний слайд продолжает отображаться
 * * Никаких пользовательских событий не должно быть, слайдер должен быть полностью автоматическим
 *
 * Дополнительные критерии(приветствуется):
 * * Слайдер должен быть максимально покрыт юнит-тестами при помощи [jest]{@link https://jestjs.io}
 * * Ошибки внутри слайдера должны корректно обрабатываться и выбрасываться(throw) с корректными вордингами
 * * Рекомендуется придерживаться ООП и соответсвовать SOLID/DRY
 * * Код должен быть легкочитаемым и понятным, Соответствие принципам [Clean Code]{@link https://github.com/ryanmcdermott/clean-code-javascript}
 * * По возможности постараться использовать Typescript
 * * Слайдер не завершает работу при достижении последнего слайда, а продолжает свою работу сначала(loop). Этот момент можно параметризировать
 * * Остановка слайдера при наведении мыши
 * * Возможноть использовать картинки вместо сплошного цвета
 * * Возможность использовать кастомную верстку вместо сплошного цвета
 *
 * Рекомендации:
 * * Рекомендуется выбрасывать ошибки при отсутствии обязательных параметров(@required)
 * * Рекомендуется поддержать необязательные параметры при помощи параметров по умолчанию
 *
 * Запрещается:
 * * Использовать фреймворки
 * * Использовать библиотеки для работы с DOM(jquery-like)
 * * Использовать сторонние слайдеры, нужно реализовать самостоятельно
 *
 * * Выполнение и сдача:
 * * Задача должна быть выполнена за 48 часов с момента получения
 * * Решение может быть представлено в виде ссылки на codesandbox(fork) или репозиторий в GH/GL
 * * Если решение представлено в виде репозитория, то в README.MD должны быть указания по запуску
 */

const sliderOptions: SliderOptions = {
  root: "#slider",
  delay: 2500,
  width: 750,
  height: 400,
  loop: true,
  slides: [
    {
      background: "#c62828",
      text: "RED",
    },
    {
      background:
        "https://i.pinimg.com/originals/9e/5b/e5/9e5be5aaec8d02052f82a194d821e227.jpg",
      text: "IMAGE AS BACKGROUND",
    },
    {
      markup: `<div style="background: red; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"><div style="background: green; width: 75%; height: 75%; display: flex; justify-content: center; align-items: center;"><div style="background: blue; width: 75%; height: 75%; display: flex; justify-content: center; align-items: center;"><span>SLIDE FROM MARKUP</span></span><div><div></div></div></div>`,
    },
    {
      background: "#6a1b9a",
      text: "PURPLE",
    },
    {
      background: "#1565c0",
      text: "BLUE",
    },
    {
      background: "#0277bd",
      text: "LIGHT_BLUE",
    },
    {
      background: "#00838f",
      text: "CYAN",
    },
    {
      background: "#00695c",
      text: "TEAL",
    },
    {
      background: "#2e7d32",
      text: "GREEN",
    },
    {
      background: "#558b2f",
      text: "LIGHT_GREEN",
    },
    {
      background: "#827717",
      text: "LIME",
    },
    {
      background: "#ef6c00",
      text: "ORANGE",
    },
    {
      background: "#d84315",
      text: "DEEP_ORANGE",
    },
    {
      background: "#4e342e",
      text: "BROWN",
    },
  ],
};

const slider = new Slider(sliderOptions);

slider.init();
