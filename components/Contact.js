import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactTitle}>
        <h1>CONTACTO</h1>
      </div>
      <a
        className={styles.c01}
        href="https://www.google.com.mx/maps/place/Orizaba,+Ver./@18.86915,-97.1367484,12.96z/data=!4m5!3m4!1s0x85c502a4c0439f05:0xd83faa836b275780!8m2!3d18.8504927!4d-97.1036053"
      >
        <div>
          <h1>UBICACIÓN</h1>
          <h2>Orizaba Ver. Mexico</h2>
        </div>
        <img src="/ubicacion.svg" alt="" />
      </a>
      <a href="https://www.instagram.com/walfret/" className={styles.c02}>
        <div>
          <h1>INSTAGRAM</h1>
          <h2>@walfret</h2>
        </div>
        <img src="/instagram-azul.svg" alt="" />
      </a>
      <a href="mailto:walfret69@gmail.com" className={styles.c03}>
        <div>
          <h1>EMAIL</h1>
          <h2>walfret69@gmail.com</h2>
        </div>
        <img src="/email.svg" alt="" />
      </a>
      <a href="https://www.facebook.com/walfret.bravo" className={styles.c04}>
        <div>
          <h1>FACEBOOK</h1>
          <h2>Walfret Rodriguez</h2>
        </div>
        <img src="/facebook-azul.svg" alt="" />
      </a>
      <a href="tel:2722143009" className={styles.c05}>
        <div>
          <h1>TELEFONO</h1>
          <h2>+52 272 214 3009</h2>
        </div>
        <img src="/llamada.svg" alt="" />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
        className={styles.c06}
      >
        <div>
          <h1>WHATSAPP</h1>
          <h2>Mi Whatsapp</h2>
        </div>
        <img src="/whatsapp-azul.svg" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/christian-rodriguez-4497a31ba/"
        className={styles.c07}
      >
        <div>
          <h1>LINKEDIN</h1>
          <h2>CHRISTIAN RODRIGUEZ</h2>
        </div>
        <img src="/linkedin-azul.svg" alt="" />
      </a>
      <a href="https://github.com/walfret" className={styles.c08}>
        <div>
          <h1>GITHUB</h1>
          <h2>WALFRET</h2>
        </div>
        <img src="/github-azul.svg" alt="" />
      </a>
    </div>
  );
};

export default Contact;
