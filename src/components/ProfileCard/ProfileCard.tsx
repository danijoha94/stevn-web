import Image from "next/image";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.box}></div>
        <Image
          className={styles.image}
          src={"/images/profile.webp"}
          alt={"Profilbilde av Advokat Kristian Hersløv"}
          width={0}
          height={0}
          sizes="100vw"
        ></Image>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact_info}>
          <h3 className={styles.contact_header}>Kristian Hersløv</h3>
          <ul className={styles.contact_list}>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>kh@stevn.no</p>
            </li>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>+47 90 53 31 37</p>
            </li>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>
                Dronning Eufemias gate 16 (DEG 16)
              </p>
            </li>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>0191 Oslo</p>
            </li>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>
                Postadresse: Postboks 1772 Vika, 0122 Oslo.
              </p>
            </li>
            <li className={styles.contact_list_item}>
              <p className={styles.contact_list_item_tag}>Org nr 933 215 180</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
