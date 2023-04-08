import { JSX, ParentProps } from "solid-js";
import Header from "./Header/Header";

export default function Layout(props: ParentProps): JSX.Element {
  return (
    <div>
      <Header />
      <main class="container">{props.children}</main>
    </div>
  );
}
