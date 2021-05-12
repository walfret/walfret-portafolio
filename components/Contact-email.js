import styles from "../styles/ContactEmail.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "./Modal";
import { useState } from "react";

const ContactEmail = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "http://localhost:3000/api/email",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        setState(!state);
        setShow(!show);
      } else if (response.status === !200) {
        console.log(error.response ? error.response : error);
        setShow(!show);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.sendEmail}>
      <Modal show={show}>
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          X
        </button>
        {state === true ? (
          <div>
            <h1>Tu mensaje fue enviado exitosamente a:</h1>
            <p>walfret69@gmail.com</p>
            <p>Espera mi mensaje para ponernos en contacto</p>
          </div>
        ) : (
          <div>
            <h1>Tu mensaje no pudo ser enviado</h1>
            <p>Intenta enviar tu mensaje mas tarde, o recargar la pagina</p>
            <p>Puedes contactarme por mis redes sociales</p>
            <a style={{ color: "white" }} href="#contact">
              Pulsa aqui para ver mis redes
            </a>
          </div>
        )}
      </Modal>
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
            <p>Añade tu email para contactarnos &darr;</p>
            <input
              type="email"
              placeholder="example@example.xyz"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter your email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 100,
                  message: "This is too long",
                },
              })}
            />
            <span className={styles.error}>{errors?.email?.message}</span>
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

export default ContactEmail;
