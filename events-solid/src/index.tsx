import { render } from 'solid-js/web';
import { Component, JSX } from "solid-js"
type HtmlProps = JSX.HTMLAttributes<HTMLDivElement>

const useDivAsComponent = true

const ComponentInner: Component<HtmlProps> = (props) => {
  const log = (name: string) => console.log("inner", name)
  const Div = (p: HtmlProps) => <div {...p} />
  return useDivAsComponent
    ? <Div {...props} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
    : <div {...props} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
}

const ComponentOuter: Component<HtmlProps> = (p) => {
  const log = (name: string) => console.log("outer", name)
  return <ComponentInner {...p} onMouseEnter={[log, "enter"]} onMouseLeave={[log, "leave"]} />
}

const style: JSX.CSSProperties = { background: "lightgrey", width: "100%", height: "100vh" }
render(
  () => <ComponentOuter style={style} />,
  document.getElementById('app') as HTMLElement
)
