import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <img src="/nave.svg" className={styles.xwing} alt="nave" />
        <p className={styles.name}>Christian Rodriguez</p>
        <p className={styles.emailText}>walfret69@gmail.com</p>
      </div>
    </div>
  );
};

export default Hero;
