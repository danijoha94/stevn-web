import Header from "../components/Header/Header";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection";
import ContentSection from "@/components/ContentSection/ContentSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const SECTION_HREF_IDS = {
  conent_section: "content",
  about_section: "about",
  contact_section: "contact",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollToTop />
      <div className={styles.backdrop}>
        <div className={styles.top}>
          <Header></Header>
          <Hero />
        </div>
      </div>
      <section className={styles.section}>
        <DescriptionSection />
      </section>
      <div className={styles.line}></div>
      <section className={styles.section} id={SECTION_HREF_IDS.conent_section}>
        <ContentSection />
      </section>
      <div className={styles.line}></div>
      <section className={styles.section} id={SECTION_HREF_IDS.about_section}>
        <AboutSection />
      </section>
      <section id={SECTION_HREF_IDS.contact_section}>
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
