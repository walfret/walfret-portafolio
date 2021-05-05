import styles from "../styles/JuegoApi.module.css";

const ButtonFlecha = () => {
  return (
    <div className={styles.inicioBtn}>
      <a href="#inicio">
        <img className={styles.flecha} src="/flecha.svg" alt="flecha" />
      </a>
    </div>
  );
};

export default ButtonFlecha;
