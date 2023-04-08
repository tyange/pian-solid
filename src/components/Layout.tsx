import { JSX, ParentProps } from "solid-js";
import Header from "./Header";

export default function Layout(props: ParentProps): JSX.Element {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
}
