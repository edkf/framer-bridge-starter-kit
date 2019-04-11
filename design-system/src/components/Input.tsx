import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

export type Props = {
  /** Input text */
  text?: string

  /** Placeholder text */
  placeholder?: string

  /** Disable Input */
  disabled?: boolean

  /** Show error state */
  error?: boolean
}

const StyledInput = styled.input`
  background: ${theme.color.paneBgDark};
  border-radius: 4px;
  border: none;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px ${theme.color.paneBorder};
  color: ${theme.color.body};
  font-family: ${theme.font};
  font-size: ${theme.size[2]};
  font-weight: 500;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: ${theme.space[3]};
  transition: box-shadow 0.2s;
  width: 100%;
  &:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme.color.primary},
      0px 0px 0px 2px ${theme.color.primaryLight};
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  &.disabled {
    color: ${theme.color.bodyLightest};
    pointer-events: none;
  }

  &.error {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme.color.danger};
  }
  &.error:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px ${theme.color.danger},
      0px 0px 0px 2px ${theme.color.dangerLight};
  }
  &.error::placeholder {
    color: ${theme.color.danger};
    opacity: 0.5;
  }
`

export const Input: React.FC<Props> = ({
  text,
  placeholder,
  error,
  disabled
}) => (
  <StyledInput
    type="text"
    value={text}
    placeholder={placeholder}
    className={`${error ? "error" : ""} ${disabled ? "disabled" : ""}`}
  />
)
