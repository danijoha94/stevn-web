import ContentCard from "../ContentCard/ContentCard";
import styles from "./ContentSection.module.css";

export default function ContentSection() {
  return (
    <div className={styles.content_section}>
      <h2>Vi har bred arbeidserfaring </h2>
      <p className={styles.content_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ul className={styles.card_list}>
        <li>
          <ContentCard
            icon="scale"
            title="Lorem ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
        </li>
        <li>
          <ContentCard
            icon="scale"
            title="Lorem ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
        </li>
        <li>
          <ContentCard
            icon="scale"
            title="Lorem ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
        </li>
      </ul>
    </div>
  );
}
