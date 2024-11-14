import styles from "./DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Arbeids- kontrakts- og entrepriserett.</h2>
      <p className={styles.text}>
        Advokat Kristian Hersløv arbeider i hovedsak med forretningsjuridiske
        spørsmål med hovedvekt på arbeids-, kontrakts- og entrepriserett. Han
        har videre erfaring med større utbyggingsprosjekter.
      </p>
      <p className={styles.text}>
        Oppdrag leveres under betingelsene i oppdragsbetingelsene som kan laste
        ned{" "}
        <a
          className={styles.link}
          href="/assets/OPPDRAGSBEKREFTELSE.docx"
          download
        >
          her
        </a>
        . Timepris er NOK 2 800 eks. mva. med mindre annet er avtalt.
      </p>
      <ul className={styles.list}>
        <li>
          <span>
            <strong>Utdanning/år – </strong> Cand jur., Universitet i Oslo
            (1978)
          </span>
        </li>
        <li>
          <span>
            <strong>Arbeidserfaring – </strong> Grafiske Bedrifters
            Landsforening Platou Investment AS Praktiserende advokat i Oslo
            siden 1983
          </span>
        </li>
        <li>
          <span>
            <strong>Medlemskap /verv – </strong>Den Norske Advokatforening
            Forretningsfører og advokat for Kranutleiernes Landsforening
          </span>
        </li>
      </ul>
    </div>
  );
}
