import { Burger } from "../../../types/Burger";

import defaultBurgerImg from "../../../assets/burger.png";

import * as AtomicCss from "../../../styles/styles.css";
import * as styles from "./BurgerItem.css";

type BurgerItemProps = {
  burger: Burger;
};
export default function BurgerItem({ burger }: BurgerItemProps) {
  return (
    <div
      class={`${AtomicCss.boxShadow} ${AtomicCss.roundedBorder} ${AtomicCss.listStyleNone} ${styles.burgerItemWrapper}`}
    >
      <div class={styles.burgerInfo}>
        <div>
          <div>
            <span class={styles.burgerName}>{burger.name}</span>
          </div>
          <div>
            <span class={styles.burgerBrand}>{burger.brand}</span>
          </div>
        </div>
        <div class={styles.burgerImgContainer}>
          <img
            class={styles.burgerImg}
            src={defaultBurgerImg}
            alt="기본 버거 이미지"
          />
        </div>
      </div>
      <div class={styles.burgerDescription}>
        <p>{burger.description}</p>
      </div>
    </div>
  );
}
