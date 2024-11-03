import Image from "next/image";
import styles from "./Header.module.css";
import { SECTION_HREF_IDS } from "@/app/page";
import Header_button from "./Header_button";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.image__large}
        src={"/assets/logo-large.png"}
        alt={"Stevn logo"}
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
      <Image
        className={styles.image__small}
        src={"/assets/logo-small.png"}
        alt={"Stevn logo"}
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list_item}>
            <Header_button
              href={SECTION_HREF_IDS.conent_section}
              text={"Tjenester"}
            />
          </li>
          <li className={styles.navbar__list_item}>
            <Header_button
              href={SECTION_HREF_IDS.about_section}
              text={"Om oss"}
            />
          </li>
          <li className={styles.navbar__list_item}>
            <Header_button
              href={SECTION_HREF_IDS.contact_section}
              text={"Kontakt"}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
