import navigation from "../styles/Navigation.module.css";
import styles from "../styles/HeaderMe.module.css";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const HeaderMe = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Desarrollador web</title>
      </Head>
      <div className={navigation.container}>
        <div>
          <Link className={navigation.homeLink} href="/">
            <div className={navigation.container_logoApp}>
              <img className="logoApp" src="/logo.svg" alt="ReactLogo" />
              <p className={navigation.cr}>CR</p>
            </div>
          </Link>
        </div>
        <i
          className={navigation.burgerBtn}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <p
            className={navigation.cerrarModal}
            style={{ display: showMenu === true ? "flex" : "none" }}
          >
            X
          </p>
        </i>
        <div
          className={navigation.menu}
          style={{ bottom: showMenu === true ? 0 : "-550vw" }}
        >
          <nav>
            <Link href="/">
              <a className={navigation.navWords}>Home</a>
            </Link>
            <div className={styles.navWords}>
              <div className={styles.dropNav}>
                Mas Acerca
                <div className={styles.dropdownContent}>
                  <a className={styles.a1} href="#about">
                    Acerca de
                  </a>
                  <a className={styles.a3} href="#tecnologies">
                    Tecnologias
                  </a>
                  <a className={styles.a3} href="#contact">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
            <Link href="/juego-api">
              <a className={navigation.navWords}>Juego</a>
            </Link>
          </nav>
        </div>
        <div>
          <a
            href="https://www.facebook.com/walfret.bravo"
            className={navigation.socialLink}
          >
            <img src="/facebook.svg" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/walfret/"
            className={navigation.socialLink}
          >
            <img src="/instagram.svg" alt="instagram" />
          </a>
          <a
            href="https://github.com/walfret?tab=repositories"
            className={navigation.socialLink}
          >
            <img src="/github-blanco.svg" alt="github" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
            className={navigation.socialLink}
          >
            <img src="/whatsapp.svg" alt="whatsapp" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-rodriguez-4497a31ba/"
            className={navigation.socialLink}
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
        </div>
      </div>
      {children}
    </>
  );
};

export default HeaderMe;
