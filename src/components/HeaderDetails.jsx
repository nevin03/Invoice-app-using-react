import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";

const HeaderDetails = ({ handlePrint }) => {
  const pageRef = useRef(null);
  const handleSend = () => {
    const subject = "Invoice for Your Purchase";
    const body = `Dear Customer,\n\nPlease find attached your invoice. Thank you for your purchase!`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  const handleDownload = async () => {
    const canvas = await html2canvas(pageRef.current);
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "invoice.png";
    link.click();
  };

  return (
    <div ref={pageRef}>
      <header className="container justify-content-center">
        <div className="text-center">
          <h2>INVOICER</h2>

          <div className="d-inline-flex">
            <ul className="d-flex list-unstyled mb-0">
              <li className="mr-3">
                <Button
                  className="invoice-button header-button m-2 btn-outline-primary"
                  onClick={handlePrint}
                >
                  Print
                </Button>
              </li>
              <li className="mr-3">
                <Button
                  className="invoice-button header-button m-2 btn-outline-success"
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </li>
              <li>
                <Button
                  className="invoice-button header-button buttonInvoice m-2 btn-outline-warning"
                  onClick={handleSend}
                >
                  Send
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderDetails;
