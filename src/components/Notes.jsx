import React from "react";

const Notes = ({ notes }) => {
  return (
    <div>
      <section className="ms-3">
        <p>{notes}</p>
      </section>
    </div>
  );
};

export default Notes;
