import React from "react";
import { Table } from "react-bootstrap";

const TableDetails = ({ items }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.amount, 0);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end pe-5">
        <h4>Total: ${calculateTotal().toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default TableDetails;
