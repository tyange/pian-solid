import { For } from "solid-js";
import BurgerItem from "./BurgerItem/BurgerItem";
import { Burger } from "../../types/Burger";

type BurgerListProps = {
  burgers: Burger[];
};

export default function BurgerList({ burgers }: BurgerListProps) {
  return (
    <div>
      <ul>
        <For each={burgers}>{(burger) => <BurgerItem burger={burger} />}</For>
      </ul>
    </div>
  );
}
