import React from "react";

const Footer = ({
  name,
  address,
  email,
  phone,
  bankName,
  bankAccount,
  website,
}) => {
  return (
    <div>
      <hr class="border-top border-3 border-dark mx-3" />

      <footer className="d-flex flex-wrap ms-3">
        <ul className="list-unstyled mb-0 d-flex flex-wrap">
          <li>
            <span className="fw-bold">Your name :</span>{" "}
            <span className="ms-3 me-3">{name}</span>
          </li>
          <li>
            <span className="fw-bold">Your address :</span>{" "}
            <span className="ms-3 me-3">{address}</span>
          </li>
          <li>
            <span className="fw-bold">Your email :</span>{" "}
            <span className="ms-3 me-3">{email}</span>
          </li>
          <li>
            <span className="fw-bold">Phone no :</span>{" "}
            <span className="ms-3 me-3">{phone}</span>
          </li>
          <li>
            <span className="fw-bold">Account holder :</span>{" "}
            <span className="ms-3 me-3">{bankName}</span>
          </li>
          <li>
            <span className="fw-bold">Account number :</span>{" "}
            <span className="ms-3 me-3">{bankAccount}</span>
          </li>
          <li>
            <span className="fw-bold">Website :</span>{" "}
            <a href={website} target="_blank" rel="noopener noreferrer">
              <span className="ms-3 me-3">{website}</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
