/* @refresh reload */
import { render } from 'solid-js/web';
import { Component, JSX } from "solid-js"
type HtmlProps = JSX.HTMLAttributes<HTMLDivElement>

const useDivAsComponent = true

const ChildComp: Component<HtmlProps> = (props) => {
  const log = (name: string) => console.log("child", name)
  const Div = (p: HtmlProps) => <div {...p} />
  return useDivAsComponent
    ? <Div {...props} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
    : <div {...props} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
}

const ParentComp: Component<HtmlProps> = (p) => {
  const log = (name: string) => console.log("parent", name)
  return <ChildComp {...p} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
}

const style: JSX.CSSProperties = { background: "lightgrey", width: "100%", height: "100vh" }
render(
  () => <ParentComp style={style} />,
  document.getElementById('app') as HTMLElement
)
