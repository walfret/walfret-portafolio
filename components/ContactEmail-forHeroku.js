import styles from "../styles/ContactEmail.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ContactEmailHeroku = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  function onSubmitForm(values) {
    router.push(
      `mailto:walfret69@gmail.com?subject=Nombre: ${values.name} ${values.phone}&body=${values.message}`
    );
  }

  return (
    <div className={styles.sendEmail}>
      <h1>Contactame Y Hagamos Grandes Proyectos</h1>
      <h2>Mandame un mensaje y tus datos para contactarnos</h2>
      <div className={styles.formMessage}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <p>Escribe tu nombre &darr;</p>
            <input
              type="text"
              placeholder="Nombre"
              name="username"
              {...register("name", {
                required: {
                  value: true,
                  message: "You must enter your name",
                },
              })}
            />
            <span className={styles.error}>{errors?.name?.message}</span>
          </div>
          <div>
            <p>Aqui puedes añadir tu numero &darr;</p>
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              {...register("phone")}
            />
          </div>
          <div>
            <p>Puedes añadir un mensaje aqui &darr;</p>
            <textarea
              placeholder="Añade un comentario"
              name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "You must enter a message",
                },
                minLength: {
                  value: 5,
                  message: "Your message must be longer than this!",
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
              })}
            />
            <span className={styles.error}>{errors?.message?.message}</span>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactEmailHeroku;
