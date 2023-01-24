import { Burger } from "../types/Burger";

type BurgerItemProps = {
  burger: Burger;
};
export default function BurgerItem({ burger }: BurgerItemProps) {
  return (
    <div class="border shadow-sm w-full h-full rounded-xl flex flex-col p-5">
      <span>{burger.Name}</span>
      <span>{burger.Brand}</span>
      <span>{burger.Description}</span>
    </div>
  );
}
