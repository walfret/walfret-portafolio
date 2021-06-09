import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.textAbout}>
        <div className={styles.titlesAbout}>
          <h2>ACERCA DE</h2>
          <h1>Un poco mas de mi</h1>
        </div>
        <p>
          Hola! Soy desarrollador web, tengo 2 años de experiencia en
          tecnologias como: HTML5, CSS3, Javascript, Typescript, Node.js,
          React.js, React routers, Redux, Next.js, Nest.js, Rest API, Github,
          MySQL, MongoDb, Express, etc... y busco trabajar como freelance. Tengo
          25 años, amo la tecnologia, tengo muchas ganas de trabajar en
          cualquier proyecto, me encanta desarrollar proyectos de todo tipo y
          nunca parar de aprender!!
        </p>
        <div className={styles.buttonsAbout}>
          <a
            href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
            className={styles.buttonsAbout1}
          >
            Contactame <img src="/whatsapp-blanco.svg" alt="whats" />
          </a>
          <a
            href="https://www.instagram.com/walfret/"
            className={styles.buttonsAbout2}
          >
            Instagram <img src="/instagram-blanco.svg" alt="insta" />
          </a>
        </div>
      </div>
      <div className={styles.container_imgMe}>
        <div>
          <img className="logoApp" src="/logo.svg" alt="img" />
        </div>
        <img className={styles.imgMe} src="/20200924_153340.jpg" alt="yo" />
      </div>
    </div>
  );
};

export default About;
