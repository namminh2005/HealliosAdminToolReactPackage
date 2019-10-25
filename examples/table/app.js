import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TableRetention} from '../../src'
import TableUtils from '../../src/components/table/tableUtils'

const appElement = document.getElementById('example');

const App = (props) => {

  const dataTable = [
    {
      col1: null,
      day0: 100.0,
      day1: 41.0,
      day2: 26.0,
      day3: 18.6,
      day4: 14.0,
      day5: 12.1,
      day6: 10.6
    },
    {
      col1: {
        time: 'Oct 17',
        user: 1677
      },
      day0: 100.0,
      day1: 41.0,
      day2: 26.0,
      day3: 18.6,
      day4: 14.0,
      day5: 12.1,
      day6: 10.6
    },
    {
      col1: {
        time: 'Oct 18',
        user: 1823
      },
      day0: 100.0,
      day1: 43.3,
      day2: 28.2,
      day3: 20.2,
      day4: 13.7,
      day5: 11.6,
      day6: 0
    },
    {
      col1: {
        time: 'Oct 19',
        user: 2036
      },
      day0: 100.0,
      day1: 40.8,
      day2: 24.8,
      day3: 17.2,
      day4: 13.1,
      day5: 0,
      day6: 0
    },
    {
      col1: {
        time: 'Oct 20',
        user: 1599
      },
      day0: 100.0,
      day1: 35.2,
      day2: 24.3,
      day3: 17.7,
      day4: 0,
      day5: 0,
      day6: 0
    },
    {
      col1: {
        time: 'Oct 21',
        user: 1599
      },
      day0: 100.0,
      day1: 43.0,
      day2: 26.5,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0
    },
    {
      col1: {
        time: 'Oct 22',
        user: 1836
      },
      day0: 100.0,
      day1: 41.7,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0
    },
    {
      col1: {
        time: 'Oct 23',
        user: 1587
      },
      day0: 100.0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0
    }
  ];

  const colConfig = [
    {
      Header: "",
      id: 'col1',
      accessor: 'col1'
    },
    {
      Header: "Day 0",
      id: "day0",
      accessor: 'day0'
    },
    {
      Header: "Day 1",
      id: "day1",
      accessor: "day1"
    },
    {
      Header: "Day 2",
      id: "day2",
      accessor: "day2"
    },
    {
      Header: "Day 3",
      id: "day3",
      accessor: "day3"
    },
    {
      Header: "Day 4",
      id: "day4",
      accessor: "day4"
    },
    {
      Header: "Day 5",
      id: "day5",
      accessor: "day5"
    },
    {
      Header: "Day 6",
      id: "day6",
      accessor: "day6"
    }
  ]

  return (
    <div>
      <TableRetention data={dataTable} colConfig={colConfig} />
    </div>
  )
}

ReactDOM.render(<App />, appElement);