export interface Slider {
  /**
   * Root css selector
   */
  rootSelector: string;
  rootNode: Element | null;
  containerNode: Element | null;
  /**
   * When the last slide is reached, determines whether to start from the first slide again or stay on the last one
   */
  loop: boolean;
  /**
   * Delay for slide switching in Milliseconds
   */
  delay: number;
  /**
   * Slider's width(no adaptive)
   */
  width: number;
  /**
   * Slider's height
   */
  height: number;
  slides: Slide[];
  activeSlideIndex: number;
  interval: NodeJS.Timer | null;
}

export type Slide = SlideWithMarkup | SlideWithTextAndBackground;

export interface SlideWithMarkup {
  markup: string;
}
export interface SlideWithTextAndBackground {
  text: string;
  /**
   * Either any valid CSS color format or link to an image
   */
  background: string;
}

export type SliderOptions = Partial<
  Pick<Slider, "delay" | "width" | "height" | "loop" | "slides">
> & {
  root: string;
};
