import React from "react";
import CreateAvatar from "../components/createAvatar";
import Layout from "../components/Layout";
import styles from "../styles/JuegoApi.module.css";
import Loader from "../components/Loader";
import Character from "../components/Character";
import ButtonFlecha from "../components/ButtonFlecha";
import Modal from "../components/Modal";

class JuegoApi extends React.Component {
  state = {
    showModal: false,
    character: {
      name: "",
      image: "",
      species: "",
      status: "",
      gender: "",
      origin: {
        name: "",
      },
    },
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  buttonCharacters = () => {
    if (this.state.nextPage <= 34) {
      return (
        <button
          className={styles.buttonFetch}
          onClick={() => this.fetchCharacters()}
        >
          Ver mas personajes
        </button>
      );
    }
  };

  handleCharacterClick = (character) => {
    this.setState({
      showModal: !this.state.showModal,
      character,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <Layout>
        <Modal show={this.state.showModal}>
          <button
            type="button"
            onClick={() => {
              this.closeModal();
            }}
          >
            X
          </button>
          <h1>{this.state.character.name}</h1>
          <img src={this.state.character.image} alt="" />
          <p>Especie: {this.state.character.species}</p>
          <p>Estado: {this.state.character.status}</p>
          <p>Genero: {this.state.character.gender}</p>
          <p>Origen: {this.state.character.origin.name}</p>
        </Modal>
        <div className={styles.container}>
          <div id="inicio" className={styles.gameApi}>
            <h1>Rick y Morty Personajes</h1>
            <div className={styles.characters}>
              {this.state.data.results.map((character) => (
                <section
                  key={character.id}
                  onClick={() => {
                    this.handleCharacterClick(character);
                  }}
                >
                  <Character character={character} />
                </section>
              ))}
            </div>
            {this.state.loading && <Loader />}
            {!this.state.loading && this.buttonCharacters()}
          </div>
          <ButtonFlecha />
          <CreateAvatar />
        </div>
      </Layout>
    );
  }
}

export default JuegoApi;
