import Image from "next/image";
import { DishDetails } from "..";
import Styles from "./dish.module.css";

export function Dish() {
  return (
    <div className={Styles.dish}>
      <div className={Styles.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Dish"
          width={592}
          height={312}
        />
      </div>

      <div>
        <div className={Styles.title}>
          <h2>Nome do Produto</h2>
        </div>
        <div className={Styles.details}>
          <DishDetails type="reviews" title="4.5" subtitle="(301)" />
          <DishDetails type="category" title="Categoria" />
          <DishDetails type="delivery" title="30 - 40 min" />
        </div>
      </div>
    </div>
  );
}
