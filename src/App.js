import "./App.scss";
import "./styles.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

import React, { Component } from "react";
import api from "./services/api";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

export default class App extends Component {
  state = {
    query: "",
    cards: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    contentModal: "",
  };

  async componentDidUpdate(prevProps, prevstSate) {
    if (
      this.state.query !== prevstSate.query ||
      this.state.page !== prevstSate.page
    ) {
      try {
        this.setState({ isLoading: true });
        const cards = await api.fetchArticlesWithQuery(
          this.state.query,
          this.state.page
        );
        this.setState({
          cards:
            this.state.page === 1 ? cards : [...this.state.cards, ...cards],
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  thoggleModal = (largeImage) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      contentModal: largeImage,
    }));
  };

  handleClickButton = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal
            thoggleModal={this.thoggleModal}
            contentModal={this.state.contentModal}
          />
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery cards={this.state.cards} onClick={this.thoggleModal} />
        {this.state.isLoading && <Loader />}
        {this.state.cards.length > 11 && !this.state.isLoading && (
          <Button handleClickButton={this.handleClickButton} />
        )}
      </div>
    );
  }
}
