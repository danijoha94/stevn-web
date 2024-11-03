import Icon, { TIcon } from "@/app/Icon/Icon";
import styles from "./ContentCard.module.css";

interface IProps {
  icon: TIcon;
  title: string;
  text: string;
}

export default function ContentCard(props: IProps) {
  const { icon, title, text } = props;

  return (
    <div className={styles.card_border}>
      <div className={styles.content_card}>
        <Icon type={icon} size={8} style="dark" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
