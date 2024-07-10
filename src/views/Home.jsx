import Table from "react-bootstrap/Table";
import * as data from "../data";
import Select from "react-select";
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

function Home() {
  const [stockDetails, setStockDetails] = useState(data.default);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Calculate dates from tomorrow to end of month
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const datesArray = [];
    let currentDate = tomorrow;

    while (currentDate <= endOfMonth) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(datesArray);
  }, []);

  const options = [
    { value: "BANKNIFTY ", label: "BANKNIFTY " },
    { value: "NIFTY", label: "NIFTY" },
    { value: "FINNIFTY", label: "FINNIFTY" },
    { value: "SENSEX", label: "SENSEX" },
    { value: "BANKEX", label: "BANKEX" },
  ];
  const Dateoptions = [
    { value: "10 july", label: "10 july" },
    { value: "09 july", label: "09 july" },
    { value: "08 july", label: "08 july" },
  ];
  const header = ["Sr. No.", "Trading Symbol", "LTP", "Trading Symbol", "LTP", "Straddle"];
  // Helper function to get month name from month index
  const getMonthName = (monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  };

  return (
    <>
      <div>
        <div className="tbl-top">
          <p className="TitleTab">Option Chain</p>
        </div>
      </div>
      <div className="filter-search-bar d-flex justify-content-between mb-2">
        {/* <Select options={options} className="select-bar" /> */}
        {/* <Select options={Dateoptions} className="select-bar" /> */}
        <select className="select-bar-Date" value={options}>
          <option value="">Select</option>
          {options.map((val) => (
            <option>
              {val.label}
            </option>
          ))}
        </select>
        <select className="select-bar-Date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="">Select a date</option>
        {dates.map((date) => (
          <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
            {`${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`}
          </option>
        ))}
      </select>
        <p className="mb-0">
          PCR:{" "}
          <span>
            <strong>3.15</strong>
          </span>
        </p>
        <p className="mb-0">
          Max pain:{" "}
          <span>
            <strong>2.45</strong>
          </span>
        </p>
        <p className="mb-0">
          IVP:{" "}
          <span>
            <strong>78.45</strong>
          </span>
        </p>
        <p className="mb-0">
          Synthetic Future:{" "}
          <span>
            <strong>3.85</strong>
          </span>
        </p>
        <p className="mb-0">
          {" "}
          ATM Straddle:{" "}
          <span>
            <strong>43.45</strong>
          </span>
        </p>
      </div>
      <div className="ThreadTable style-2-Scrolbar">
      <Table  className="Thread_Table"  striped hover>
        <thead>
          <tr>
            {header.map((name) => (
              <th>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stockDetails.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data?.CEtradingSymbol}</td>
              <td>{data?.CEltp}</td>
              <td>{data?.PEtradingSymbol}</td>
              <td>{data?.PEltp}</td>
              <td>12345</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </>
  );
}

export default Home;
