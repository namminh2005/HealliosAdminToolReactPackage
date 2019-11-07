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
        return obj.Cell = that.firstColCellRender.bind(null, data)
      }
      else{
        return obj.Cell = that.cellRender.bind(null, data)
      }
    });
  }

  firstColCellRender(data,cell) {
    if(cell.index == 0) return null;

    const pStyle = {
      marginBottom: '0px'
    }

    const val = cell.value;
    let arr = [val.time, `${val.total} ${val.label}`];

    return cell.value ? (
      <div style={{margin: '0px 5px'}}>
        <p style={pStyle}>{arr[0]}</p>
        <p style={{...pStyle,color:'rgba(0, 0, 0, 0.54)'}}>{arr[1]}</p>
      </div>
    ) : null
  }

  cellRender(data,cell){
    let divStyle = {
      width: '100%',
      height: '100%',
      display: 'table'
    }

    let pStyle = {
      margin: '0px',
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle'
    }

    if(cell.index == 0){
      return cell.value ? (<div style={divStyle}>
        <p style={pStyle}>{((Math.round(cell.value*1000) / 1000) * 100).toFixed(1)} %</p>
      </div>) : null;
    }
    else{
      const itemData = data[cell.index];
      const total = itemData['firstCol'] ? itemData['firstCol'].total : null;
      const calColor = (min, max, opacity) => {
        return min + (max - min) * opacity;
      }
      
      const opacity = total == 0 ? 0 : cell.value / total;
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

      if(cell.index > 0){
        divStyle = {
          ...divStyle,
          background: `rgb(${calColor(rgbMin.r, rgbMax.r, opacity)}, ${calColor(rgbMin.g, rgbMax.g, opacity)}, ${calColor(rgbMin.b, rgbMax.b, opacity)})`,
          color: opacity >= 0.5 ? '#fff' : '#000'
        }
      }
      const calUsers = cell.value ? `${cell.value} ${itemData['firstCol'] ? itemData['firstCol'].label : null}` : null;
      return cell.value ? (
        <div style={divStyle} data-tip={calUsers} >
          {/* <Popup trigger={<div>hiiii</div>} content="asdsd" inverted /> */}
          <p style={pStyle}>{total == 0 ? 0 : ((Math.round(cell.value/total*1000) / 1000) * 100).toFixed(1)}%</p>
        </div>) : null
    }
  }

  render(){
    return (
      <ReactTable 
        className='react-table-retention'
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