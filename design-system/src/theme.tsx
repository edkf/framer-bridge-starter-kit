export enum Color {
  /** Used for general pane elements like inputs & buttons */
  paneBg = "paneBg",

  /** Used for general pane elements like inputs & buttons */
  paneBgDark = "paneBgDark",

  /** Used for general pane elements like inputs & buttons */
  paneBorder = "paneBorder",

  /** Primary brand color */
  Primary = "primary",

  /** Primary brand color for dark accents */
  PrimaryDark = "primaryDark",

  /** Primary brand color for light accents */
  PrimaryLight = "primaryLight",

  /** Used for errors and breaking changes */
  Danger = "danger",

  /** Used for errors and breaking changes */
  DangerDark = "dangerDark",

  /** Used for errors and breaking changes */
  DangerLight = "dangerLight",

  /** Used for default body text */
  Body = "body",

  /** Used for light body text */
  BodyLight = "bodyLight",

  /** Used for lighter body text */
  BodyLighter = "bodyLighter",

  /** Used for lightest body text */
  BodyLightest = "bodyLightest"
}

type Colors = { [key in Color]: string }

const color: Colors = {
  paneBg: "#FFF",
  paneBgDark: "#FDFDFD",
  paneBorder: "rgba(0,0,0,.1)",
  primary: "#75C",
  primaryDark: "#74C",
  primaryLight: "#EEF",
  danger: "#F44",
  dangerDark: "#F34",
  dangerLight: "#FDD",
  body: "#222",
  bodyLight: "#444",
  bodyLighter: "#666",
  bodyLightest: "#AAA"
}

const size: string[] = ["0", "13px", "15px", "18px", "20px"]

const space: string[] = ["0", "4px", "8px", "16px", "32px"]

const font = "-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"

type Theme = {
  /** Brand colors */
  color: Colors

  /** Brand font family */
  font: string

  /** Font sizes */
  size: string[]

  /** Spacing sizes used for margins and paddings */
  space: string[]
}

export const theme: Theme = {
  color,
  font,
  size,
  space
}
