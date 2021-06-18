import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import PaymentsTable from "../Components/PaymentsTable";

interface PaymentsIF {
  P_ID: number;
  AMOUNT: string;
  DATE_OF_PAYMENT: string;
  CUSTOMER_NAME: string;
  CUSTOMER_EMAIL: string;
  CUSTOMER_PHONE: string;
}

const Payments = () => {
  const [allPayments, setAllPayments] = useState<PaymentsIF[]>([]);
  useEffect(() => {
    axios.get("/payments/all").then((res: AxiosResponse) => {
      console.log(res.data.data);
      setAllPayments(res.data.data);
    });
  }, []);

  const deleteHandler = (filteredPayments: PaymentsIF[]) => {
    setAllPayments(filteredPayments);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Payments</h1>
      <PaymentsTable
        allPayments={allPayments}
        paymentDeleteHandler={deleteHandler}
      />
    </div>
  );
};

export default Payments;
