import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalIsOpen
    };
    this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
  }

  handleModalCloseRequest() {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      modalIsOpen: false
    });
    this.props.onRequestClose();
  }

  handleSaveClicked(e) {
    this.props.onRequestSave(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.modalIsOpen !== this.props.modalIsOpen) {
      this.setState((state, props) => {
        return {
          modalIsOpen: props.modalIsOpen
        };
      });
    }
  }

  render() {
    return React.createElement(ReactModal, {
      className: "Modal__Bootstrap modal-dialog",
      isOpen: this.state.modalIsOpen,
      onRequestClose: this.handleModalCloseRequest
    }, React.createElement("div", {
      className: "modal-content"
    }, this.props.headerTitleLabel ? React.createElement("div", {
      className: "modal-header"
    }, React.createElement("h4", {
      className: "modal-title"
    }, this.props.headerTitleLabel), React.createElement("button", {
      type: "button",
      className: "close",
      onClick: this.handleModalCloseRequest
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"), React.createElement("span", {
      className: "sr-only"
    }, "Close"))) : null, React.createElement("div", {
      className: "modal-body"
    }, this.props.children), React.createElement("div", {
      className: "modal-footer"
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      onClick: this.handleModalCloseRequest
    }, this.props.footerCloseLabel), React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: this.handleSaveClicked
    }, this.props.footerSaveLabel))));
  }

}

Modal.propTypes = {
  headerTitleLabel: PropTypes.string,
  modalIsOpen: PropTypes.bool.isRequired,
  footerCloseLabel: PropTypes.string,
  footerSaveLabel: PropTypes.string,
  onRequestClose: PropTypes.func.isRequired,
  onRequestSave: PropTypes.func.isRequired
};
Modal.defaultProps = {
  modalIsOpen: false,
  footerCloseLabel: 'Close',
  footerSaveLabel: 'Save changes'
};
export default Modal;