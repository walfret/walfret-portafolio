import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.nave} src="/nave.svg" />
      <div>
        <ul>
          <li>
            <a href="#inicio">
              <label>Inicio</label>
              <img
                src="/flecha.svg"
                alt="inicio"
                style={{ transform: "rotate(180deg)" }}
              />
            </a>
          </li>
          <li>
            <a href="#about">
              <label>Acerca</label>
              <img src="/user.svg" alt="acerca" />
            </a>
          </li>
          <li>
            <a href="#tecnologies">
              <label>Tecnologias</label>
              <img src="/html5.svg" alt="tecnologias" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <label>Contacto</label>
              <img src="/llamada.svg" alt="contactame" />
            </a>
          </li>
          <li>
            <a href="https://github.com/walfret?tab=repositories">
              <label>Proyectos</label>
              <img src="/github-blanco.svg" alt="proyectos" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
