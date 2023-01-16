import { SliderOptions } from "./types";
import {
  isSlideWithMarkup,
  isSlideWithTextAndBackground,
  isUrl,
} from "./utils";

const classes = {
  container: "slider__container",
  slide: "slider__slide",
};

export class Slider implements Slider {
  // Config
  rootSelector;
  delay;
  width;
  height;
  slides;
  loop;

  // DOM nodes
  rootNode;
  containerNode;

  // State
  activeSlideIndex = 0;
  interval = null;

  constructor({
    root,
    slides,
    delay = 2500,
    height = 400,
    width = 750,
    loop = true,
  }: SliderOptions) {
    if (!root) {
      throw new TypeError(
        "Slider cannot be initialized without `root` parameter"
      );
    }

    if (!slides) {
      throw new TypeError(
        "Slider cannot be initialized without `slides` parameter"
      );
    }

    if (slides.length === 0) {
      throw new Error(
        `Slider cannot be initialized with ${slides.length} \`slides\``
      );
    }

    this.rootSelector = root;
    this.slides = slides;
    this.delay = delay;
    this.width = width;
    this.height = height;
    this.loop = loop;
  }

  init() {
    this.render();
    this.start();
  }

  render() {
    const $root = document.querySelector(this.rootSelector);
    $root?.setAttribute("style", `width: ${this.width}px`);
    this.rootNode = $root;

    const $slideContainer = document.createElement("div");
    $slideContainer.setAttribute("class", classes.container);
    $slideContainer.setAttribute(
      "style",
      `height: ${this.height}px; width: ${this.width * this.slides.length}px`
    );
    $slideContainer.addEventListener("mouseover", () => this.stop());
    $slideContainer.addEventListener("mouseleave", () => this.start());
    this.containerNode = $slideContainer;

    this.slides.forEach((slide) => {
      const $slide = document.createElement("div");
      $slide.setAttribute("class", classes.slide);

      if (isSlideWithMarkup(slide)) {
        $slide.insertAdjacentHTML("afterbegin", slide.markup);
      } else if (isSlideWithTextAndBackground(slide)) {
        $slide.insertAdjacentText("afterbegin", slide.text);
        $slide.setAttribute(
          "style",
          `${"background"}: ${
            isUrl(slide.background)
              ? `url(${slide.background})`
              : slide.background
          } center no-repeat; background-size: cover;`
        );
      }

      $slideContainer.insertAdjacentElement("beforeend", $slide);
    });

    this.rootNode?.insertAdjacentElement("afterbegin", $slideContainer);
  }

  start() {
    if (this.interval) {
      return;
    }

    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.delay);
  }

  stop() {
    if (!this.interval) {
      return;
    }

    clearInterval(this.interval);
    this.interval = null;
  }

  prevSlide() {
    const isActiveSlideFirst = this.activeSlideIndex === 0;
    if (isActiveSlideFirst) {
      return;
    }

    this.activeSlideIndex = this.activeSlideIndex - 1;
    this.updateView();
  }

  nextSlide() {
    const isActiveSlideLast = this.activeSlideIndex === this.slides.length - 1;
    if (isActiveSlideLast && !this.loop) {
      this.stop();
      return;
    }

    this.activeSlideIndex = isActiveSlideLast ? 0 : this.activeSlideIndex + 1;
    this.updateView();
  }

  updateView() {
    if (this.containerNode) {
      this.containerNode.style.transform = `translateX(-${
        this.activeSlideIndex * this.width
      }px)`;
    }
  }

  destroy() {
    this.stop();

    // Remove all event listeners from the slider's container node
    this.containerNode.replaceWith(this.containerNode.cloneNode(true));

    this.rootNode.remove();
  }
}
