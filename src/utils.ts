import { Slide, SlideWithMarkup, SlideWithTextAndBackground } from "./types";

export const isUrl = (string: string) => {
  return new RegExp(/(https?:\/\/[^\s]+)/g).test(string);
};

export const isSlideWithMarkup = (slide: Slide): slide is SlideWithMarkup => {
  const hasMarkupProp = "markup" in slide;
  return hasMarkupProp;
};

export const isSlideWithTextAndBackground = (
  slide: Slide
): slide is SlideWithTextAndBackground => {
  const hasTextProp = "text" in slide;
  const hasBackgroundProp = "background" in slide;
  return hasTextProp && hasBackgroundProp;
};
