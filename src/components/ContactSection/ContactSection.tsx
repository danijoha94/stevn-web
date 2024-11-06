import Icon from "../../app/Icon/Icon";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.contact}>
        <div className={styles.contact_content}>
          <h3 className={styles.text}>Tilgang til advokathjelp, kontakt oss</h3>
          <div className={styles.contact_buttons}>
            <a className={styles.contact_button} href="tel:+ 47 90 53 31 37">
              <Icon type={"phone"} size={2} style={"neutral"} />+ 47 90 53 31 37
            </a>
            <a className={styles.contact_button} href="mailto: kh@stevn.no">
              <Icon type={"mail"} size={2} style={"neutral"} />
              kh@stevn.no
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
