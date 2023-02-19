import Layout from "../components/Layout";
import BurgerForm from "../components/BurgerForm";

export default function AddBurgerPage() {
  return (
    <Layout>
      <div class="flex justify-center items-center w-full h-full">
        <BurgerForm />
      </div>
    </Layout>
  );
}
