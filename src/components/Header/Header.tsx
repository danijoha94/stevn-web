import Image from "next/image";
import styles from "./Header.module.css";
import Header_button from "./Header_button";

const SECTION_HREF_IDS = {
  about_section: "about",
  contact_section: "contact",
};

export default function Header() {
  return (
    <>
      <Image
        className={styles.image__small}
        src={"/assets/logo-small.png"}
        alt={"Stevn logo"}
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
      <div className={styles.title_container}>
        <h1 className={styles.title}>STEVN ADVOKATER</h1>
      </div>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__list_item}>
              <Header_button
                href={SECTION_HREF_IDS.about_section}
                text={"Om oss"}
              />
            </li>
            <li>|</li>
            <li className={styles.navbar__list_item}>
              <Header_button
                href={SECTION_HREF_IDS.contact_section}
                text={"Kontakt"}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
