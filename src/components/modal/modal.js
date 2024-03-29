import React from 'react';
import ReactModal from 'react-modal'
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
    this.handleSaveClicked = this.handleSaveClicked.bind(this);
  }

  handleModalCloseRequest() {
    this.props.onRequestClose();
  }

  handleSaveClicked(e) {
    this.props.onRequestSave(e);
  }

  render () {
    return (
      <ReactModal 
        className="Modal__Bootstrap modal-dialog"
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.handleModalCloseRequest}
      >
      <div className="modal-content">
          {
            this.props.headerTitleLabel ? (
              <div className="modal-header">
                <h4 className="modal-title">{this.props.headerTitleLabel}</h4>
                <button type="button" className="close" onClick={this.handleModalCloseRequest}>
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
            ) : null
          }
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.handleModalCloseRequest}>{this.props.footerCloseLabel}</button>
            <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>{this.props.footerSaveLabel}</button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  headerTitleLabel: PropTypes.string,
  modalIsOpen: PropTypes.bool.isRequired,
  footerCloseLabel: PropTypes.string,
  footerSaveLabel: PropTypes.string,

  onRequestClose: PropTypes.func.isRequired,
  onRequestSave: PropTypes.func.isRequired
}

Modal.defaultProps = {
  modalIsOpen: false,
  footerCloseLabel: 'Close',
  footerSaveLabel: 'Save changes',
}

export default Modal;