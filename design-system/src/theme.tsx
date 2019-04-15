type Colors = {
  paneBg: string
  paneBgDark: string
  paneBorder: string
  primary: string
  primaryDark: string
  primaryLight: string
  danger: string
  dangerDark: string
  dangerLight: string
  body: string
  bodyLight: string
  bodyLighter: string
  bodyLightest: string
}

const color: Colors = {
  paneBg: "#FFF",
  paneBgDark: "#FDFDFD",
  paneBorder: "rgba(0, 0, 0, 0.1)",
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

export const theme = {
  color,
  font,
  size,
  space
}
