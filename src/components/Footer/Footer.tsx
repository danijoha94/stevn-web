import Icon from "../../app/Icon/Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.rights}>
          <p>Johansen Web</p>
          <p>©</p>
          <p>All right reserved</p>
        </span>
        <ul className={styles.contact}>
          <li>
            <a>
              <Icon type={"phone"} size={2} style="dark" />
            </a>
          </li>
          <li>
            <a>
              <Icon type={"mail"} size={2} style="dark" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
