import React from "react";
import Gravatar from "./Gravatar";
import styles from "../styles/Avatar.module.css";

class AvatarBadge extends React.Component {
  render() {
    return (
      <div className={styles.avatarBadge}>
        <div className={styles.badgeHeader}>
          <img className={styles.xwing} src="/nave.svg" alt="" />
        </div>

        <div className={styles.badgeSection_name}>
          <Gravatar email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className={styles.badgeSection_info}>
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className={styles.badgeSection_email}>{this.props.email}</div>
      </div>
    );
  }
}

export default AvatarBadge;
