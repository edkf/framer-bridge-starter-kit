export enum Color {
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

  /** Brightnes level 0 on a scale from 0-6 */
  B0 = "B0",

  /** Brightnes level 1 on a scale from 0-6 */
  B1 = "B1",

  /** Brightnes level 2 on a scale from 0-6 */
  B2 = "B2",

  /** Brightnes level 3 on a scale from 0-6 */
  B3 = "B3",

  /** Brightnes level 4 on a scale from 0-6 */
  B4 = "B4",

  /** Brightnes level 5 on a scale from 0-6 */
  B5 = "B5",

  /** Brightnes level 6 on a scale from 0-6 */
  B6 = "B6"
}

type Colors = { [key in Color]: string }

const color: Colors = {
  primary: "#75C",
  primaryDark: "#74C",
  primaryLight: "#EEF",
  danger: "#F44",
  dangerDark: "#F34",
  B0: "#FFF",
  B1: "#FBFBFB",
  B2: "#EEE",
  B3: "#AAA",
  B4: "#666",
  B5: "#444",
  B6: "#222"
}

const size: string[] = ["0", "13px", "15px", "18px", "20px"]

const space: string[] = ["0", "4px", "8px", "16px", "32px"]

const font = "-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"

const border = `1px solid ${color.B2}`

type Theme = {
  /** Brand colors */
  color: Colors

  /** Brand font family */
  font: string

  /** Font sizes */
  size: string[]

  /** Spacing sizes used for margins and paddings */
  space: string[]

  /** Default border style */
  border: string
}

export const theme: Theme = {
  border,
  color,
  font,
  size,
  space
}
