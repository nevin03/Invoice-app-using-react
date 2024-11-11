import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <div>
      {" "}
      <section className="mt-5 ms-3">
        <h6>{clientName}</h6>
        <p>{clientAddress}</p>
      </section>
    </div>
  );
};

export default ClientDetails;
