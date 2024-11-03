"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import Icon from "../../app/Icon/Icon";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);
  return (
    <button
      className={styles.scroll_to_top}
      onClick={scrollToTop}
      data-visible={isVisible}
    >
      <Icon type={"chevron-up"} size={2} style="neutral" />
    </button>
  );
}
