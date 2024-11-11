import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import HeaderDetails from "./components/HeaderDetails";
import DateDetails from "./components/DateDetails";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import "./App.css";
import TableDetails from "./components/TableDetails";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    email: "",
    phone: "",
    bankName: "",
    bankAccount: "",
    website: "",
    clientName: "",
    clientAddress: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    notes: "",
    items: [{ description: "", price: "", quantity: 0, amount: 0 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    if (field === "price" || field === "quantity") {
      updatedItems[index].amount =
        updatedItems[index].price * updatedItems[index].quantity;
    }

    setFormData((prevData) => ({
      ...prevData,
      items: updatedItems,
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const clearForm = () => {
    setFormData({
      userName: "",
      address: "",
      email: "",
      phone: "",
      bankName: "",
      bankAccount: "",
      website: "",
      clientName: "",
      clientAddress: "",
      invoiceNumber: "",
      invoiceDate: "",
      dueDate: "",
      notes: "",
    });
  };

  const addItem = () => {
    setFormData((prevData) => ({
      ...prevData,
      items: [
        ...prevData.items,
        { description: "", price: "", quantity: 1, amount: 0 },
      ],
    }));
  };
  const calculateTotal = () => {
    return formData.items.reduce((total, item) => total + item.amount, 0);
  };
  const [showInvoice, setInvoice] = useState(false);

  return (
    <div className="App">
      <main>
        {showInvoice ? (
          <div>
            <HeaderDetails handlePrint={handlePrint} />
            <MainDetails name={formData.userName} address={formData.address} />
            <ClientDetails
              clientName={formData.clientName}
              clientAddress={formData.clientAddress}
            />
            <DateDetails
              invoiceNumber={formData.invoiceNumber}
              invoiceDate={formData.invoiceDate}
              dueDate={formData.dueDate}
            />
            <TableDetails items={formData.items} />
            <Notes notes={formData.notes} />
            <Footer
              name={formData.userName}
              address={formData.address}
              email={formData.email}
              phone={formData.phone}
              bankName={formData.bankName}
              bankAccount={formData.bankAccount}
              website={formData.website}
            />
            <Button
              onClick={() => setInvoice(false)}
              className="invoice-button m-2 pe-3 ps-3 btn-outline-dark preview-button d-flex justify-content-center mx-auto mt-3 mb-3"
              variant="white"
            >
              Edit Information
            </Button>
          </div>
        ) : (
          <Form>
            {[
              {
                name: "userName",
                placeholder: "Enter your name",
                type: "text",
              },
              {
                name: "address",
                placeholder: "Enter your address",
                type: "text",
              },
              { name: "email", placeholder: "Enter your email", type: "email" },
              {
                name: "phone",
                placeholder: "Enter your phone number",
                type: "number",
              },
              {
                name: "bankName",
                placeholder: "Enter your bank name",
                type: "text",
              },
              {
                name: "bankAccount",
                placeholder: "Enter your account number",
                type: "number",
              },
              {
                name: "website",
                placeholder: "Enter your website URL",
                type: "url",
              },
              {
                name: "clientName",
                placeholder: "Enter client's name",
                type: "text",
              },
              {
                name: "clientAddress",
                placeholder: "Enter client's address",
                type: "text",
              },
              {
                name: "invoiceNumber",
                placeholder: "Enter invoice number",
                type: "number",
              },
              {
                name: "invoiceDate",
                placeholder: "Enter date of invoice (dd/mm/yyyy)",
                type: "text",
              },
              {
                name: "dueDate",
                placeholder: "Enter due date (dd/mm/yyyy)",
                type: "text",
              },
              { name: "notes", placeholder: "Notes here", type: "text" },
            ].map((field) => (
              <Form.Group key={field.name} className="mb-3 pt-5 ps-3 pe-3">
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  style={{ backgroundColor: "#f0f8ff", color: "#333" }}
                />
              </Form.Group>
            ))}
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
                {formData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Control
                        type="text"
                        value={item.description}
                        onChange={(e) =>
                          handleItemChange(index, "description", e.target.value)
                        }
                        placeholder="Enter description"
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          handleItemChange(index, "price", e.target.value)
                        }
                        placeholder="Enter price"
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, "quantity", e.target.value)
                        }
                        placeholder="Enter quantity"
                      />
                    </td>
                    <td>
                      <strong>${item.amount.toFixed(2)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Button
              className="add-item-button  mt-3 ps-4 pe-4 mb-3 mx-auto d-flex justify-content-center align-items-center w-auto"
              onClick={addItem}
              variant="success"
            >
              Add another Item
            </Button>
            <Button
              className="clear-button text-white invoice-button ps-5 pe-5 mb-3 b mx-auto d-flex justify-content-center align-items-center w-auto"
              onClick={clearForm}
              variant="danger"
            >
              Clear All
            </Button>

            <Button
              className="preview-button text-white invoice-button ps-4 pe-4 mb-3 btn-outline-dark mx-auto d-flex justify-content-center align-items-center w-auto"
              onClick={() => setInvoice(true)}
            >
              Preview Invoice
            </Button>
          </Form>
        )}
      </main>
    </div>
  );
}

export default App;
