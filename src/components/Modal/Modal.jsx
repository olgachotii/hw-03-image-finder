import React, { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.thoggleModal();
    }
  };
  handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.thoggleModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.contentModal} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
