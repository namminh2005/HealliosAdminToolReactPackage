import React from "react";
import ReactTable from "react-table";
import PropTypes from 'prop-types';
import "react-table/react-table.css";
import "./table.css";

class TableAjaxData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({
      loading: true
    }); // Request the data however you want.  Here, we'll use our mocked service we created earlier

    this.props.requestData(state.pageSize, state.page, state.sorted, state.filtered).then(res => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      this.setState({
        data: res.rows,
        pages: res.pages,
        loading: false
      });
    });
  }

  render() {
    const {
      data,
      pages,
      loading
    } = this.state;
    return React.createElement("div", null, React.createElement(ReactTable, {
      className: "-striped -highlight",
      columns: this.props.colConfig,
      manual: true // Forces table not to paginate or sort automatically, so we can handle it server-side
      ,
      data: data,
      pages: pages // Display the total number of pages
      ,
      loading: loading // Display the loading overlay when we need it
      ,
      onFetchData: this.fetchData // Request new data when things change
      ,
      filterable: this.props.filterable,
      defaultPageSize: this.props.defaultPageSize
    }));
  }

}

TableAjaxData.propTypes = {
  colConfig: PropTypes.array.isRequired,
  defaultPageSize: PropTypes.number.isRequired,
  requestData: PropTypes.func.isRequired,
  filterable: PropTypes.bool
};
TableAjaxData.defaultProps = {
  defaultPageSize: 10,
  filterable: false
};
export default TableAjaxData;