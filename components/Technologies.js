import styles from "../styles/Technologies.module.css";

const Technologies = () => {
  return (
    <div id="tecnologies" className={styles.technologies}>
      <div className={styles.technoTitle}>
        <h1>TECNOLOGIAS</h1>
        <h1>Con las que mas me gusta trabajar</h1>
      </div>
      <a
        href="https://developer.mozilla.org/es/docs/Web/HTML"
        className={styles.t01}
      >
        <img src="/html5.svg" alt="HTML5" />
      </a>
      <a
        href="https://developer.mozilla.org/es/docs/Web/CSS"
        className={styles.t02}
      >
        <img src="/css3.svg" alt="CSS3" />
      </a>
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        className={styles.t03}
      >
        <img src="/javascript.png" alt="JavaScript" />
      </a>
      <a href="https://nextjs.org/docs" className={styles.t04}>
        <img src="/nextjs.svg" alt="Next.js" />
      </a>
      <a href="https://dev.mysql.com/doc/" className={styles.t05}>
        <img src="/mysql.svg" alt="MySQL" />
      </a>
      <a href="https://docs.nestjs.com/" className={styles.t06}>
        <img src="/nest-logo.svg" alt="Nest.js" />
      </a>
    </div>
  );
};

export default Technologies;
