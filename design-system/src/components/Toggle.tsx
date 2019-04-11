import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  /** Disable Toggle */
  disabled?: boolean

  /** Set active state  */
  active?: boolean

  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

// Component
export const Toggle: React.FC<Props> = ({ disabled, active, onClick }) => (
  <StyledToggle
    className={`${disabled ? "disabled" : ""} ${active ? "active" : ""}`}
    onClick={onClick}
  />
)

// Styling
const StyledToggle = styled.span`
  background: ${theme.color.paneBgDark};
  border-radius: 100px;
  border-radius: 18px;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px ${theme.color.paneBorder};
  cursor: pointer;
  display: block;
  font-size: 14px;
  height: 36px;
  position: relative;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  width: 64px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    top: 3px;
    left: 3px;
    background: ${theme.color.paneBg};
    transition: left 0.2s ease;
    will-change: left;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);
  }

  &.active {
    background: ${theme.color.primary};
  }
  &.active:before {
    left: 31px;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
