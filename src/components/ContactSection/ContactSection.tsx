import Icon from "../../app/Icon/Icon";
import styles from "./ContactSection.module.css";
import Image from "next/image";

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
          <a
            href="https://www.mobilkraner.no/"
            className={styles.kl_link}
            target="_blank"
          >
            <Image
              className={styles.image}
              src={"/images/lk-logo.png"}
              alt={"Logo til Kranutleiernes Landsforening"}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
