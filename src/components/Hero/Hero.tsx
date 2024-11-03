import Icon from "@/app/Icon/icon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>STEVN ADVOKATER</div>
      <button className={styles.contactButton}>
        <Icon type="contact" size={2} style="neutral" />
        Kontakt oss
      </button>
    </div>
  );
}
