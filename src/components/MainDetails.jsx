import React from "react";

const MainDetails = ({ name, address }) => {
  return (
    <div>
      <section className="d-flex justify-content-end me-3">
        <div>
          <h6>{name}</h6>
          <p>{address}</p>
        </div>
      </section>
    </div>
  );
};

export default MainDetails;
