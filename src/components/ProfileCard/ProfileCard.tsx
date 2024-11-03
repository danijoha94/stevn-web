import Image from "next/image";
import styles from "./ProfileCard.module.css";
import Icon from "@/app/Icon/Icon";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.box}></div>
        <Image
          className={styles.image}
          src={"/images/profile.png"}
          alt={"Profilbilde av Advokat Kristian Hersløv"}
          width={0}
          height={0}
          sizes="100vw"
        ></Image>
        <div className={styles.info_boble_one}>
          <span>Advokat</span>
        </div>
        <div className={styles.info_boble_two}>
          <span>Kristian Hersløv</span>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact_info}>
          <h3 className={styles.contact_header}>Kontakt</h3>
          <ul className={styles.contact_list}>
            <li className={styles.contact_list_item}>
              <a className={styles.contact_list_item_tag}>
                <Icon type={"location"} size={1} style={"neutral"} />
                Oslo, Norge
              </a>
            </li>
            <li className={styles.contact_list_item}>
              <a className={styles.contact_list_item_tag}>
                <Icon type={"mail"} size={1} style={"neutral"} />
                ola@nordmann.no
              </a>
            </li>
            <li className={styles.contact_list_item}>
              <a className={styles.contact_list_item_tag}>
                <Icon type={"phone"} size={1} style={"neutral"} />
                +47 123 45 679
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
