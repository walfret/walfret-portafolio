import React from "react";
import styles from "../styles/Avatar.module.css";

class AvatarForm extends React.Component {
  handleClick = (e) => {
    alert("Este formulario es solo de prueba");
  };

  render() {
    return (
      <div className={styles.formAvatar}>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <p>Nombre</p>
            <input
              onChange={this.props.onChange}
              className={styles.formControl}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              placeholder="First name"
              required
              autoFocus
            />
          </div>
          <div>
            <p>Apellido</p>
            <input
              onChange={this.props.onChange}
              className={styles.formControl}
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input
              onChange={this.props.onChange}
              className={styles.formControl}
              type="email"
              name="email"
              value={this.props.formValues.email}
              placeholder="walfret69@gmail.com"
              required
            />
          </div>
          <div>
            <p>Trabajo</p>
            <input
              onChange={this.props.onChange}
              className={styles.formControl}
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              placeholder="Job title"
            />
          </div>
          <div>
            <p>Twitter</p>
            <input
              onChange={this.props.onChange}
              className={styles.formControl}
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              placeholder="example"
            />
          </div>
          <button type="button" onClick={this.handleClick}>
            Guardar
          </button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default AvatarForm;
