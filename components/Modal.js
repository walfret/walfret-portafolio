import styles from "../styles/Modal.module.css";
import ClientOnlyPortal from "../components/ClientOnlyPortal";

const Modal = ({ show, children }) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.display_block}`
    : `${styles.modal} ${styles.display_none}`;
  return (
    <ClientOnlyPortal selector="#modal">
      <div className={showHideClassName}>
        <div className={styles.modal_main}>{children}</div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
