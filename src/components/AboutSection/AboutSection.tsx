import Image from "next/image";
import ProfileCard from "../ProfileCard/ProfileCard";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <article className={styles.about}>
      <ProfileCard />
      <div className={styles.content}>
        <p className={styles.text}>
          Advokat Kristian Hersløv driver sin advokatvirksomhet i samarbeid med
          advokat Ole Per Solum og advokat Jon Søland. Se&nbsp;
          <a
            className={styles.link}
            href="https://proptimize.no/"
            target="_blank"
          >
            www.proptimize.no
          </a>{" "}
          – Kontoret ligger i Oslo Sentrum – Barcode
        </p>
        <div className={styles.image_container}>
          <p className={styles.image_watermark}>Foto: Braathen Eiendom AS</p>
          <Image
            className={styles.image}
            src={"/images/frontdoor.png"}
            alt={"Stevn logo"}
            width={0}
            height={0}
            sizes="100vw"
          ></Image>
        </div>
      </div>
    </article>
  );
}
