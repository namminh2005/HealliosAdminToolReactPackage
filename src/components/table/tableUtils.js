import React from "react";

const TableUtils = {
  firstColCellRender: (cell) => {
    const pStyle = {
      marginBottom: '0px'
    }

    let arr = [];

    if(cell.value){
      for(let key in cell.value){
        if(key == 0){
          arr.push(cell.value[key]);
        }
        else{
          arr.push(cell.value[key] + ' ' + key + 's');
        }
      }
    }

    return cell.value ? (
      <div style={{margin: '0px 5px'}}>
        <p style={pStyle}>{arr[0]}</p>
        <p style={{...pStyle,color:'rgba(0, 0, 0, 0.54)'}}>{arr[1]}</p>
      </div>
    ) : null
  }
}

export default TableUtils;