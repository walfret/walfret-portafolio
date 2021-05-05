import Layout from "../components/Layout";
import AvatarBadge from "../components/AvatarBadge";
import AvatarForm from "../components/AvatarForm";
import styles from "../styles/Avatar.module.css";
import React from "react";

class Avatar extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div>
            <AvatarBadge
              firstName={this.state.form.firstName || "FIRST_NAME"}
              lastName={this.state.form.lastName || "LAST_NAME"}
              twitter={this.state.form.twitter || "twitter"}
              jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
              email={this.state.form.email || "EMAIL"}
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            />
          </div>
          <div>
            <h1 className={styles.titleAvatar}>Datos Personales</h1>
            <AvatarForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Avatar;
