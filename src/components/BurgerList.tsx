import { For } from "solid-js";
import BurgerItem from "./BurgerItem";
import { Burger } from "../types/Burger";

type BurgerListProps = {
  burgers: Burger[];
};

export default function BurgerList({ burgers }: BurgerListProps) {
  return (
    <div class="w-full h-full flex justify-center items-center">
      <ul class="w-9/12 h-full grid grid-cols-3 gap-5">
        <For each={burgers}>
          {(burger) => (
            <li class="w-full h-60 justify-self-center">
              <BurgerItem burger={burger} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
