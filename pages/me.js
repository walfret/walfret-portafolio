import styles from "../styles/Me.module.css";
import Layout from "../components/HeaderMe";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import ContactEmail from "../components/Contact-email";
import Footer from "../components/Footer";
import CreateAvatar from "../components/createAvatar";

const Me = () => {
  return (
    <Layout>
      <div id="inicio" className={styles.container}>
        <Hero />
        <div className={styles.container_button}>
          <a href="#about" className={styles.buttonFlecha}>
            <img src="/flecha.svg" alt="flecha" />
          </a>
          Esta es mi lap
        </div>
        <About />
        <Technologies />
        <Contact />
        <ContactEmail />
        <Footer />
        <CreateAvatar />
      </div>
    </Layout>
  );
};

export default Me;
