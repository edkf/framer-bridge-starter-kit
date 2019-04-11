import * as React from "react"
import * as System from "../../design-system/src"
import { ControlType, PropertyControls } from "framer"

type Props = System.InputProps & {
  width: number
  height: number
}

export class Input extends React.Component<Props> {
  render() {
    return <System.Input {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 50,
    disabled: false,
    error: false,
    placeholder: "Email",
    text: null
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    placeholder: { type: ControlType.String, title: "Placeholder" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    error: { type: ControlType.Boolean, title: "Error" }
  }
}
