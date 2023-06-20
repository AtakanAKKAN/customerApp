import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0) {
      console.log("Yeni Müşteri eklemesini engelle");
      setIsValid(false);
      return;
    }
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const nameInputChangeHandler = (e) => {
    if(e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setCustomerName(e.target.value);
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`customer-input ${ !isValid ? "invalid" : ""}`}
        placeholder="Add a new customer"
        onChange={nameInputChangeHandler}
        value={customerName}
        // style={{
        //   backgroundColor: !isValid ? "red" : "",
        // }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
