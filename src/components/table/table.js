import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./table.css";

class Table extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ReactTable 
        className='-striped -highlight'
        data={this.props.data}
        columns={this.props.colConfig}
        showPagination={this.props.showPagination}
        sortable={true}
        resizable={true}
        defaultPageSize={this.props.defaultPageSize} />
    )
  }
}

Table.defaultProps = {
  showPagination: true,
  defaultPageSize: 10
}

export default Table;