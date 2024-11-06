import styles from "./DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>
        Stevn advokater – arbeids-, kontrakts- og entrepriserett.
      </h2>
      <p className={styles.text}>
        Advokat Kristian Hersløv arbeider i hovedsak med forretningsjuridiske
        spørsmål med hovedvekt på arbeids-, kontrakts- og entrepriserett. Han
        Utdanning/år: Cand jur., Universitet i Oslo (1978) Arbeidserfaring:
        Grafiske Bedrifters Landsforening Platou Investment AS Praktiserende
        advokat i Oslo siden 1983 Medlemskap /verv: Den Norske Advokatforening
        Forretningsfører og advokat for Kranutleiernes Landsforening
      </p>
      <p className={styles.text}>
        Oppdrag leveres under betingelsene i oppdragsbekreftelsen som kan lastes
        ned{" "}
        <a
          className={styles.link}
          href="/assets/OPPDRAGSBEKREFTELSE.docx"
          download
        >
          her
        </a>
        .
      </p>
      <p className={styles.text}>
        Har videre erfaring med større utbyggingsprosjekter. Timepris: NOK 2
        800,- eks mva hvis ikke annet er avtalt
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
