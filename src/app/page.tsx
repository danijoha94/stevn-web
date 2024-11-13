import Header from "../components/Header/Header";
import styles from "./page.module.css";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AboutSection from "../components/AboutSection/AboutSection";

const SECTION_HREF_IDS = {
  about_section: "about",
  contact_section: "contact",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollToTop />
      {/* <div className={styles.backdrop}>
        <p className={styles.image_watermark}>Braathen Eiendom</p>
        <div className={styles.top}> */}
      <Header></Header>
      {/* </div>
      </div> */}
      <section className={styles.section}>
        <AboutSection />
      </section>
      <div className={styles.line}></div>
      <section id={SECTION_HREF_IDS.about_section} className={styles.section}>
        <DescriptionSection />
      </section>
      <section id={SECTION_HREF_IDS.contact_section}>
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
