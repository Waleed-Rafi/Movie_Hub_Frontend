import { AxiosResponse } from "axios";
import React from "react";
import axios from "../axios/axios";

interface PaymentIF {
  P_ID: number;
  AMOUNT: string;
  DATE_OF_PAYMENT: string;
  CUSTOMER_NAME: string;
  CUSTOMER_EMAIL: string;
  CUSTOMER_PHONE: string;
}

const paymentsTable: React.FC<{
  allPayments: PaymentIF[];
  paymentDeleteHandler: Function;
}> = ({ allPayments, paymentDeleteHandler }) => {
  const deleteHandler = (paymentId: number) => {
    axios
      .delete(`/payment/delete?payment_id=${paymentId}`)
      .then((res: AxiosResponse) => {
        if (res.data.success) {
          let filteredTickets: PaymentIF[] = allPayments.filter((tickets) => {
            return tickets.P_ID !== paymentId;
          });
          paymentDeleteHandler(filteredTickets);
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
            <th scope="col">Customer Phone</th>
            <th scope="col">Amount</th>
            <th scope="col">Date Of Payment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allPayments.map((data, index) => {
            return (
              <tr key={data.P_ID} className="align-middle">
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
                <td>{data.CUSTOMER_PHONE}</td>

                <td>{data.AMOUNT}</td>
                <td>{data.DATE_OF_PAYMENT.split("").splice(0, 10).join("")}</td>
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
                    onClick={() => deleteHandler(data.P_ID)}
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

export default paymentsTable;
