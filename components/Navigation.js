import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.homeLink}>
        <Link href="/">
          <div className={styles.container_logoApp}>
            <img className="logoApp" src="/logo.svg" alt="ReactLogo" />
            <p className={styles.cr}>CR</p>
          </div>
        </Link>
      </div>
      <i
        className={styles.burgerBtn}
        onClick={() => {
          setShow(!show);
        }}
      >
        <p
          className={styles.cerrarModal}
          style={{ display: show === true ? "flex" : "none" }}
        >
          X
        </p>
      </i>
      <div
        className={styles.menu}
        style={{ bottom: show === true ? 0 : "-550vw" }}
      >
        <nav>
          <Link href="/">
            <a className={styles.navWords}>Home</a>
          </Link>

          <Link href="/me">
            <a className={styles.navWords}>Mas Acerca</a>
          </Link>

          <Link href="/juego-api">
            <a className={styles.navWords}>Juego</a>
          </Link>
        </nav>
      </div>
      <div>
        <a
          href="https://www.facebook.com/walfret.bravo"
          className={styles.socialLink}
        >
          <img src="/facebook.svg" alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/walfret/"
          className={styles.socialLink}
        >
          <img src="/instagram.svg" alt="instagram" />
        </a>
        <a
          href="https://github.com/walfret?tab=repositories"
          className={styles.socialLink}
        >
          <img src="/github-blanco.svg" alt="github" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
          className={styles.socialLink}
        >
          <img src="/whatsapp.svg" alt="whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-rodriguez-4497a31ba/"
          className={styles.socialLink}
        >
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
