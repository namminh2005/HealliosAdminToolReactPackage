import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableRetention, Table, TableAjaxData } from '../../src'
import TableUtils from '../../src/components/table/tableUtils'
import _ from "lodash";
import namor from "namor";

const appElement = document.getElementById('example');

const App = (props) => {

  const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

  const newPerson = () => {
    const statusChance = Math.random();
    return {
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? "relationship"
          : statusChance > 0.33 ? "complicated" : "single"
    };
  };

  const makeData = (len = 5553) => {
    return range(len).map(d => {
      return {
        ...newPerson(),
        children: range(10).map(newPerson)
      };
    });
  }

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
      day1: 56.0,
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
      day1: 78.3,
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
      accessor: 'col1',
      width: 200
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

  const dataTable2 = makeData();

  const colConfig2 = [
    {
      Header: "First Name",
      accessor: "firstName"
    },
    {
      Header: "Last Name",
      id: "lastName",
      accessor: d => d.lastName
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Status",
      accessor: "status"
    },
    {
      Header: "Visits",
      accessor: "visits"
    }
  ]

  const rawData = makeData();
  const requestData = (pageSize, page, sorted, filtered) => {
    return new Promise((resolve, reject) => {
      // You can retrieve your data however you want, in this case, we will just use some local data.
      let filteredData = rawData;
  
      // You can use the filters in your request, but you are responsible for applying them.
      if (filtered.length) {
        filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
          return filteredSoFar.filter(row => {
            return (row[nextFilter.id] + "").includes(nextFilter.value);
          });
        }, filteredData);
      }
      // You can also use the sorting in your request, but again, you are responsible for applying it.
      const sortedData = _.orderBy(
        filteredData,
        sorted.map(sort => {
          return row => {
            if (row[sort.id] === null || row[sort.id] === undefined) {
              return -Infinity;
            }
            return typeof row[sort.id] === "string"
              ? row[sort.id].toLowerCase()
              : row[sort.id];
          };
        }),
        sorted.map(d => (d.desc ? "desc" : "asc"))
      );
  
      // You must return an object containing the rows of the current page, and optionally the total pages number.
      const res = {
        rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
        pages: Math.ceil(filteredData.length / pageSize)
      };
  
      // Here we'll simulate a server response with 500ms of delay.
      setTimeout(() => resolve(res), 500);
    });
  };
  const colConfig3 = [
    {
      Header: "First Name",
      accessor: "firstName"
    },
    {
      Header: "Last Name",
      id: "lastName",
      accessor: d => d.lastName
    },
    {
      Header: "Age",
      accessor: "age"
    }
  ]

  const minhDataTable = [
    {"firstCol":{"time":"Oct 31","total":0, label: 'Users'},"col0":0,"col1":0,"col2":0,"col3":0,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 1","total":3, label: 'Users'},"col0":3,"col1":0,"col2":1,"col3":1,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 2","total":1, label: 'Users'},"col0":1,"col1":1,"col2":1,"col3":1,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 3","total":2, label: 'Users'},"col0":2,"col1":2,"col2":1,"col3":0,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 4","total":2, label: 'Users'},"col0":2,"col1":1,"col2":0,"col3":0,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 5","total":2, label: 'Users'},"col0":2,"col1":0,"col2":0,"col3":0,"col4":0,"col5":0,"col6":0},
    {"firstCol":{"time":"Nov 6","total":1, label: 'Users'},"col0":1,"col1":0,"col2":0,"col3":0,"col4":0,"col5":0,"col6":0}
  ];
  const minhConfig = [
    {"Header":"","id":"firstCol","accessor":"firstCol"},
    {"Header":"Day 0","id":"col0","accessor":"col0"},
    {"Header":"Day 1","id":"col1","accessor":"col1"},
    {"Header":"Day 2","id":"col2","accessor":"col2"},
    {"Header":"Day 3","id":"col3","accessor":"col3"},
    {"Header":"Day 4","id":"col4","accessor":"col4"},
    {"Header":"Day 5","id":"col5","accessor":"col5"},
    {"Header":"Day 6","id":"col6","accessor":"col6"}];

  return (
    <div>
      <TableRetention data={minhDataTable} colConfig={minhConfig} />
      <Table data={dataTable2} colConfig={colConfig2} showPagination={false} defaultPageSize={10} />
      <TableAjaxData colConfig={colConfig3} requestData={requestData} />
    </div>
  )
}

ReactDOM.render(<App />, appElement);