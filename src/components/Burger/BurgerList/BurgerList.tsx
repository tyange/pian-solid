import { For } from "solid-js";
import BurgerItem from "../BurgerItem/BurgerItem";
import { Burger } from "../../../types/Burger";

import * as AtomicCss from "../../../styles/styles.css";
import * as styles from "./BurgerList.css";

type BurgerListProps = {
  burgers: Burger[];
};

export default function BurgerList({ burgers }: BurgerListProps) {
  return (
    <div>
      <div class={`${styles.burgerList}`}>
        <For each={burgers}>{(burger) => <BurgerItem burger={burger} />}</For>
      </div>
    </div>
  );
}
