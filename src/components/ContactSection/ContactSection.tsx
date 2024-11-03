import Icon from "@/app/Icon/icon";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.contact}>
        <div className={styles.contact_content}>
          <h3 className={styles.text}>Tilgang til advokathjelp, kontakt oss</h3>
          <div className={styles.contact_buttons}>
            <a className={styles.contact_button}>
              <Icon type={"phone"} size={2} style={"neutral"} />
              +47 123 45 678
            </a>
            <a className={styles.contact_button}>
              <Icon type={"mail"} size={2} style={"neutral"} />
              ola@nordmann.no
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
