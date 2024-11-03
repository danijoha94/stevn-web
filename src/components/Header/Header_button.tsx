"use client";

import styles from "./Header.module.css";

interface IProps {
  href: string;
  text: string;
}

export default function Header_button(props: IProps) {
  const { href, text } = props;
  return (
    <a
      className={styles.header_button}
      href={`#${href}`}
      onClick={() => {
        setTimeout(() => {
          // Get the current URL
          const currentUrl = window.location.href;

          // Find the position of the first slash after the domain
          const firstSlashIndex = currentUrl.indexOf(
            "/",
            currentUrl.indexOf("//") + 2
          ); // +2 to skip 'http://' or 'https://'

          // Construct the new URL
          const newUrl =
            firstSlashIndex !== -1
              ? currentUrl.slice(0, firstSlashIndex)
              : currentUrl;

          // Update the URL without reloading
          window.history.replaceState(null, "", newUrl);
        });
      }}
    >
      {text}
    </a>
  );
}
