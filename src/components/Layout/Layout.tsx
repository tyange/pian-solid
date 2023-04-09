import { JSX, ParentProps } from "solid-js";
import Header from "../Header/Header";

import * as styles from "./Layout.css";

export default function Layout(props: ParentProps): JSX.Element {
  return (
    <div class={styles.layoutWrapper}>
      <Header />
      <main class={`${styles.main} container`}>{props.children}</main>
    </div>
  );
}
