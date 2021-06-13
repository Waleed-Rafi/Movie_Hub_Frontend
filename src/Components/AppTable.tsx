import { AxiosResponse } from "axios";
import React from "react";
import axios from "../axios/axios";

interface TicketsIF {
  TCK_ID: number;
  TCK_NUMBER: number;
  TCK_AVAILABLE: number;
  VENUE: string;
  MOV_ID: number;
  MOV_NAME: string;
  MOV_LANG: string;
  MOV_THUMBNAIL: string;
  MOV_HOUR: string;
  MOV_DATE: string;
}

const AppTable: React.FC<{
  allTickets: TicketsIF[];
  ticketDeleteHandler: Function;
}> = ({ allTickets, ticketDeleteHandler }) => {
  const deleteHandler = (ticketId: number) => {
    axios
      .delete(`/ticket/delete?tck_id=${ticketId}`)
      .then((res: AxiosResponse) => {
        if (res.data.success) {
          let filteredTickets: TicketsIF[] = allTickets.filter((tickets) => {
            return tickets.TCK_ID !== ticketId;
          });
          ticketDeleteHandler(filteredTickets);
        }
      });
  };
  return (
    <div style={{ margin: "3rem 20rem 0 20rem" }}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ticket No.</th>
            <th scope="col">Poster</th>
            <th scope="col">Tickets Available</th>
            <th scope="col">Venue</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allTickets.map((data, index) => {
            let temp1: Date = new Date(
              data.MOV_DATE.split("").splice(0, 10).join("") +
                " " +
                data.MOV_HOUR
            );
            let temp2: Date = new Date();
            return (
              <tr
                key={data.TCK_ID}
                className={`${
                  temp1 < temp2 ? "table-danger" : "table-success"
                } align-middle`}
              >
                <th scope="row">{index + 1}</th>
                <td>{data.TCK_ID}</td>
                <td>
                  <img
                    src={data.MOV_THUMBNAIL}
                    alt=""
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "30px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{data.TCK_AVAILABLE}</td>
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
                    {data.VENUE}
                  </p>
                </td>
                <td>{data.MOV_NAME}</td>
                <td>
                  {data.MOV_DATE.split("").splice(0, 10).join("") +
                    " " +
                    data.MOV_HOUR}
                </td>
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
                    onClick={() => deleteHandler(data.TCK_ID)}
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

export default AppTable;
