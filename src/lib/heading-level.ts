import { createContext, useContext } from "react";

/**
 * The heading level a widget should use for its own title. A chapter sets it
 * from where the widget sits: before the chapter's first subheading the widget
 * is a direct child of the h1, after one it is nested under that h2.
 */
const HeadingLevel = createContext<2 | 3>(3);

export const HeadingLevelProvider = HeadingLevel.Provider;

export function useWidgetHeading(): "h2" | "h3" {
  return useContext(HeadingLevel) === 2 ? "h2" : "h3";
}
