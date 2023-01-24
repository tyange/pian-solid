import { JSX, ParentProps } from "solid-js";
import Header from "./Header";

export default function Layout(props: ParentProps): JSX.Element {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1">{props.children}</main>
    </div>
  );
}
