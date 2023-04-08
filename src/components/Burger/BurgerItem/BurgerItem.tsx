import { Burger } from "../../../types/Burger";

import defaultBurgerImg from "../../../assets/burger.png";

type BurgerItemProps = {
  burger: Burger;
};
export default function BurgerItem({ burger }: BurgerItemProps) {
  return (
    <li>
      <div>
        <div>
          <div>
            <span>{burger.name}</span>
          </div>
          <div>
            <span>{burger.brand}</span>
          </div>
        </div>
        <div>
          <div>
            <img src={defaultBurgerImg} alt="기본 버거 이미지" />
          </div>
        </div>
      </div>
      <div>
        <p>{burger.description}</p>
      </div>
    </li>
  );
}
