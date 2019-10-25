import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import TableUtils from "./tableUtils";

class tableRetention extends React.Component{
  constructor(props){
    super(props);
    var that = this;
    const data = props.data;
    this.colConfig = Object.assign([], props.colConfig);

    this.colConfig.map((obj, index) => {
      if(index == 0){
        return obj.Cell = TableUtils.firstColCellRender
      }
      else{
        return obj.Cell = that.cellRender.bind(null, data[index].col1.user)
      }
    });
  }
  cellRender(total,cell){
    const calColor = (min, max, opacity) => {
      return min + (max - min) * opacity;
    }
    
    const opacity = cell.value / 100;
    const rgbMin = {
      // r: 66,
      // g: 133,
      // b: 244
      r: 255,
      g: 255,
      b: 255
    }
    const rgbMax = {
      r: 1,
      g: 104,
      b: 250
    }

    const divStyle = {
      background: `rgb(${calColor(rgbMin.r, rgbMax.r, opacity)}, ${calColor(rgbMin.g, rgbMax.g, opacity)}, ${calColor(rgbMin.b, rgbMax.b, opacity)})`,
      color: opacity >= 0.5 ? '#fff' : '#000',
      width: '100%',
      height: '100%',
      display: 'table'
    }
    const pStyle = {
      margin: '0px',
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
    const totalUser = `${Math.round(cell.value/100*total)} Users`;
    return cell.value ? (
      <div style={divStyle} data-tip={totalUser}>
        {/* <Popup trigger={<div>hiiii</div>} content="asdsd" inverted /> */}
        <p style={pStyle}>{cell.value}%</p>
      </div>) : null
  }
  render(){
    return (
      <ReactTable 
        className='react-table-retention -striped'
        data={this.props.data}
        columns={this.colConfig}
        showPagination={false}
        sortable={false}
        resizable={false}
        defaultPageSize={this.props.data.length} />
    )
  }
}

export default tableRetention;