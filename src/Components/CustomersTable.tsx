import { AxiosResponse } from "axios";
import React from "react";
import axios from "../axios/axios";

interface CustomersIF {
  CUSTOMER_ID: number;
  CUSTOMER_NAME: string;
  CUSTOMER_ADDRESS: string;
  CUSTOMER_EMAIL: string;
  CUSTOMER_PHONE: string;
}

const CustomersTable: React.FC<{
  allCustomers: CustomersIF[];
  customerDeleteHandler: Function;
}> = ({ allCustomers, customerDeleteHandler }) => {
  const deleteHandler = (customerId: number) => {
    axios
      .delete(`/customer/delete?customer_id=${customerId}`)
      .then((res: AxiosResponse) => {
        if (res.data.success) {
          let filteredTickets: CustomersIF[] = allCustomers.filter(
            (tickets) => {
              return tickets.CUSTOMER_ID !== customerId;
            }
          );
          customerDeleteHandler(filteredTickets);
        }
      });
  };
  return (
    <div style={{ margin: "3rem 20rem 0 20rem" }}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Customer Address</th>
            <th scope="col">Customer Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allCustomers.map((data, index) => {
            return (
              <tr key={data.CUSTOMER_ID} className="align-middle">
                <th scope="row">{index + 1}</th>

                <td>
                  <p
                    style={{
                      background: "#28B463",
                      width: "90px",
                      padding: "3px 12px",
                      color: "white",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  >
                    {data.CUSTOMER_NAME}
                  </p>
                </td>
                <td>{data.CUSTOMER_EMAIL}</td>
                <td>{data.CUSTOMER_ADDRESS}</td>

                <td>{data.CUSTOMER_PHONE}</td>
                <td>
                  <button
                    style={{
                      background: "#EA2B50",
                      padding: "3px 12px",
                      color: "white",
                      borderRadius: "20px",
                      textAlign: "center",
                      border: "none",
                    }}
                    onClick={() => deleteHandler(data.CUSTOMER_ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
