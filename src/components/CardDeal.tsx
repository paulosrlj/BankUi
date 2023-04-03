import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Encontre o melhor cartão para você em apenas alguns passos <br className="sm:block hidden" /> 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Temos diversas opções de cartões
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
