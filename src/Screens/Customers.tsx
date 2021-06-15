import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import CustomersTable from "../Components/CustomersTable";

interface CustomersIF {
  CUSTOMER_ID: number;
  CUSTOMER_NAME: string;
  CUSTOMER_ADDRESS: string;
  CUSTOMER_EMAIL: string;
  CUSTOMER_PHONE: string;
}

const Customers = () => {
  const [allCustomers, setAllCustomers] = useState<CustomersIF[]>([]);
  useEffect(() => {
    axios.get("/customers/all").then((res: AxiosResponse) => {
      setAllCustomers(res.data.data);
    });
  }, []);

  const deleteHandler = (filteredCustomers: CustomersIF[]) => {
    setAllCustomers(filteredCustomers);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>CUSTOMERS</h1>
      <CustomersTable
        allCustomers={allCustomers}
        customerDeleteHandler={deleteHandler}
      />
    </div>
  );
};

export default Customers;
