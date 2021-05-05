import Link from "next/link";
import styles from "../styles/Avatar.module.css";

const CreateAvatar = () => {
  return (
    <div className={styles.container_link}>
      <Link href="/avatar">
        <a className={styles.linkAvatar}>Crea tu avatar</a>
      </Link>
    </div>
  );
};

export default CreateAvatar;
