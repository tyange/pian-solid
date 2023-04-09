import Layout from "../components/Layout/Layout";
import BurgerForm from "../components/Burger/BurgerForm/BurgerForm";

import * as styles from "../components/Layout/Layout.css";

export default function AddBurgerPage() {
  return (
    <Layout>
      <div class={styles.mainContainer}>
        <BurgerForm />
      </div>
    </Layout>
  );
}
