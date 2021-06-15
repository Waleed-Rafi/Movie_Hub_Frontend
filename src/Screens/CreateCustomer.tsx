import React, { useEffect, useState } from "react";
import AppInput from "../Components/AppInput";
import AppSubmitButton from "../Components/AppSubmitButton";
import "./Screens.css";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import AppAlert from "../Components/AppAlert";

interface CustomersIF {
  CUSTOMER_NAME: string;
  CUSTOMER_ADDRESS: string;
  CUSTOMER_EMAIL: string;
  CUSTOMER_PHONE: string;
}

const CreateMovie: React.FC = () => {
  const [customersData, setCustomersData] = useState<CustomersIF>({
    CUSTOMER_NAME: "",
    CUSTOMER_EMAIL: "",
    CUSTOMER_ADDRESS: "",
    CUSTOMER_PHONE: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCustomersData({
      ...customersData,
      [e.target.name]: e.target.value.toString(),
    });
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const createSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let data: any = {
      ...customersData,
    };
    if (data.CUSTOMER_EMAIL.length === 0) delete data.CUSTOMER_EMAIL;
    if (data.CUSTOMER_PHONE.length === 0) delete data.CUSTOMER_PHONE;

    axios.post("/customer/create", data).then((response: AxiosResponse) => {
      if (response.data.error) {
        setErrorMessage(response.data.error);
        setSuccessMessage(null);
      } else if (response.data.success) {
        setSuccessMessage(response.data.success);
        setErrorMessage(null);
      }
    });
  };

  return (
    <div className="create-form">
      <h1 className="create-heading">CREATE NEW CUSTOMERS</h1>
      <AppAlert
        visible={errorMessage || successMessage ? true : false}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <form
        onSubmit={(e) => {
          createSubmitHandler(e);
        }}
      >
        <AppInput
          name="CUSTOMER_NAME"
          placeholder="Customer Name"
          value={customersData.CUSTOMER_NAME}
          changeHandler={changeHandler}
        />
        <AppInput
          name="CUSTOMER_EMAIL"
          placeholder="Customer Email (optional)"
          value={customersData.CUSTOMER_EMAIL}
          changeHandler={changeHandler}
        />
        <AppInput
          name="CUSTOMER_ADDRESS"
          placeholder="Customer Address"
          value={customersData.CUSTOMER_ADDRESS}
          changeHandler={changeHandler}
        />
        <AppInput
          name="CUSTOMER_PHONE"
          placeholder="Customer Phone (optional)"
          type="number"
          value={customersData.CUSTOMER_PHONE}
          changeHandler={changeHandler}
        />
        <AppSubmitButton title="CREATE" />
      </form>
    </div>
  );
};

export default CreateMovie;
