import React from "react";
import { useEffect } from "react";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import AppTable from "../Components/AppTable";
import { useState } from "react";

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

const Tickets = () => {
  const [allTickets, setAllTickets] = useState<TicketsIF[]>([]);
  useEffect(() => {
    axios.get("/tickets/all").then((res: AxiosResponse) => {
      setAllTickets(res.data.data);
    });
  }, []);

  const deleteHandler = (filteredTickets: TicketsIF[]) => {
    setAllTickets(filteredTickets);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        {/* TICKETS FOR MOVIES */}
        TICKETS FOR MOVIES
      </h1>
      <AppTable allTickets={allTickets} ticketDeleteHandler={deleteHandler} />
    </div>
  );
};

export default Tickets;
