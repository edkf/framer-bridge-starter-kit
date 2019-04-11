import * as React from "react"
import * as System from "../../design-system/src"

type Props = { text: string }

export class Test extends React.Component<Props> {
  render() {
    return <System.Test />
  }
}
