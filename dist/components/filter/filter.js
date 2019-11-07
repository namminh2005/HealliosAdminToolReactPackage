import React from 'react';
import * as Icon from 'react-feather';
import "./filter.css";
import PropTypes from 'prop-types';
import _ from 'lodash';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleClickRemove(id) {
    this.props.removeRequest(id);
  }

  handleClickAdd(e) {
    this.props.clickAdd();
  }

  render() {
    const arrFilter = this.props.arrFilter;
    return React.createElement("div", {
      className: "report-filter-wrapper"
    }, React.createElement(Icon.Plus, {
      className: "hoverhand",
      onClick: e => this.handleClickAdd(e)
    }), React.createElement("div", {
      className: "report-filter"
    }, arrFilter.map((item, index) => {
      return React.createElement("div", {
        className: "chip layout-row",
        key: item.id
      }, React.createElement("p", {
        className: "chip-text ng-isolate-scope"
      }, item.text), React.createElement(Icon.XCircle, {
        className: "hoverhand",
        onClick: e => this.handleClickRemove(item.id, e)
      }));
    })));
  }

}

Filter.propTypes = {
  arrFilter: PropTypes.array.isRequired
};
export default Filter;