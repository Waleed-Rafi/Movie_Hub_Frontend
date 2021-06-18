import React, { useEffect, useState } from "react";
import AppInput from "../Components/AppInput";
import AppSubmitButton from "../Components/AppSubmitButton";
import "./Screens.css";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import AppAlert from "../Components/AppAlert";

interface PaymentIF {
  AMOUNT: string;
  DATE_OF_PAYMENT: string;
  C_ID: string;
}

const CreatePayment: React.FC = () => {
  const [paymentData, setPaymentData] = useState<PaymentIF>({
    AMOUNT: "",
    DATE_OF_PAYMENT: "",
    C_ID: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value.toString(),
    });
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const createSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let data: any = {
      ...paymentData,
    };
    data.C_ID = parseInt(data.C_ID);
    data.AMOUNT = parseInt(data.AMOUNT);

    axios.post("/payment/create", data).then((response: AxiosResponse) => {
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
      <h1 className="create-heading">CREATE NEW PAYMENTS</h1>
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
          name="AMOUNT"
          placeholder="Amount"
          type="number"
          value={paymentData.AMOUNT}
          changeHandler={changeHandler}
        />
        <AppInput
          name="DATE_OF_PAYMENT"
          placeholder="DATE_OF_PAYMENT (YYYY-MM-DD)"
          value={paymentData.DATE_OF_PAYMENT}
          changeHandler={changeHandler}
        />
        <AppInput
          name="C_ID"
          placeholder="Customer ID"
          type="number"
          value={paymentData.C_ID}
          changeHandler={changeHandler}
        />

        <AppSubmitButton title="CREATE" />
      </form>
    </div>
  );
};

export default CreatePayment;
