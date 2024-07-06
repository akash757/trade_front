import Table from "react-bootstrap/Table";
import * as data from "../data";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";

function Home() {
  const [stockDetails, setStockDetails] = useState(data.default);
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const header = ["Sr. No.", "Trading Symbol", "LTP", "Trading Symbol", "LTP"];
  return (
    <>
      <div>
        <div className="tbl-top">Option Chain</div>
      </div>
      <div className="filter-search-bar d-flex justify-content-between mb-2">
        <Select options={options} className="select-bar" />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="inp"
        />
        <p>
          PCR:{" "}
          <span>
            <strong>3.15</strong>
          </span>
        </p>
        <p>
          Max pain:{" "}
          <span>
            <strong>2.45</strong>
          </span>
        </p>
        <p>
          IVP:{" "}
          <span>
            <strong>78.45</strong>
          </span>
        </p>
        <p>
          Synthetic Future:{" "}
          <span>
            <strong>3.85</strong>
          </span>
        </p>
        <p>
          {" "}
          ATM Straddle:{" "}
          <span>
            <strong>43.45</strong>
          </span>
        </p>
      </div>
      <Table striped bordered hover>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
