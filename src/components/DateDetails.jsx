import React from "react";

export const DateDetails = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <div>
      {" "}
      <article className="d-flex justify-content-end me-3">
        <ul className="list-unstyled">
          <b>
            <li>{invoiceNumber}</li>
          </b>
          <b>
            {" "}
            <li>{invoiceDate}</li>
          </b>
          <b>
            {" "}
            <li>{dueDate}</li>
          </b>
        </ul>
      </article>
    </div>
  );
};
export default DateDetails;
