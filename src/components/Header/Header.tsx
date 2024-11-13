import styles from "./Header.module.css";
import Header_button from "./Header_button";

const SECTION_HREF_IDS = {
  about_section: "about",
  contact_section: "contact",
};

export default function Header() {
  return (
    <>
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
        <div className={styles.top_banner}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>STEVN ADVOKATFIRMA</h1>
          </div>
          <div className={styles.image_image_container}>
            <p className={styles.watermark}>Foto: Braathen Eiendom AS</p>
          </div>
        </div>
      </header>
    </>
  );
}
