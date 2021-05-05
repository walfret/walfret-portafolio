import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Rodriguez - Desarrollador</title>
      </Head>
      <div className={styles.links}>
        <figure>
          <img className="logoApp" src="/logo.svg" alt="React-logo" />
          <p>CR</p>
        </figure>
        <section>
          <nav>
            <Link href="/me">
              <div>
                <a>Mas Acerca De Mi</a>
              </div>
            </Link>
          </nav>
          <nav>
            <Link href="/avatar">
              <div>
                <a>Crear Tu Avatar</a>
              </div>
            </Link>
          </nav>
          <nav>
            <Link href="/juego-api">
              <div>
                <a>Juego con api</a>
              </div>
            </Link>
          </nav>
        </section>
      </div>
      <main className={styles.welcome}>
        <h1>Bienvenido a mi portafolio</h1>
        <h1>Mi nombre es Christian, soy Desarrollador Full Stack</h1>
        <div className={styles.downloadCv}>
          <h1>Puedes descargar mi curriculum aqui:</h1>
          <a href="/CurriculumVitae.pdf" download>
            Descargar CV
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>Pagina creada con Next.js</p>
        </div>
        <div className={styles.codePage}>
          <p>El codigo de esta pagina esta aqui:</p>
          <a href="/">
            <img className={styles.git} src="/github-blanco.svg" alt="Github" />
          </a>
        </div>
        <div className={styles.redes}>
          <p>Visita mis redes sociales:</p>
          <a href="https://www.facebook.com/walfret.bravo">
            <img src="/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/walfret/">
            <img src="/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0">
            <img src="/whatsapp.svg" alt="Whatsapp" />
          </a>
          <a href="https://github.com/walfret" className={styles.git}>
            <img src="/github-blanco.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/christian-rodriguez-4497a31ba/">
            <img src="/linkedin.svg" alt="Linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
