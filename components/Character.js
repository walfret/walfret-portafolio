import React from "react";
import styles from "../styles/JuegoApi.module.css";

class Character extends React.Component {
  render() {
    return (
      <div>
        <img
          className={styles.imgCharacter}
          src={this.props.character.image}
          alt={this.props.character.name}
        />
        <p>{this.props.character.name}</p>
      </div>
    );
  }
}

export default Character;
