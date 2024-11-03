import styles from "./DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>
        <span>Tittle</span>
        <span>Undertittel</span>
      </h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
