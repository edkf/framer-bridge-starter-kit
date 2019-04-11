import * as React from "react"
import * as System from "../../design-system/src"
import { ControlType, PropertyControls } from "framer"

type Props = System.ToggleProps & {
  width: number
  height: number
}

type State = {
  active?: boolean
}

export class Toggle extends React.Component<Props, State> {
  state = {
    active: false
  }

  handleClick = () => {
    console.log("hallo")
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <System.Toggle
        {...this.props}
        active={this.state.active}
        onClick={this.handleClick}
      />
    )
  }

  static defaultProps: Props = {
    width: 64,
    height: 36,
    disabled: false
  }

  static propertyControls: PropertyControls<Props> = {
    disabled: { type: ControlType.Boolean, title: "Disabled" }
  }
}
