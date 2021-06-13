import React, { useEffect, useState } from "react";
import AppInput from "../Components/AppInput";
import AppSubmitButton from "../Components/AppSubmitButton";
import "./Screens.css";
import axios from "../axios/axios";
import { AxiosResponse } from "axios";
import AppAlert from "../Components/AppAlert";

interface ticketDataIF {
  TCK_NO: string;
  TCK_AVAILABLE: string;
  VENUE: string;
  MOV_ID: string;
}

const CreateMovie: React.FC = () => {
  const [ticketsData, setTicketsData] = useState<ticketDataIF>({
    TCK_NO: "",
    TCK_AVAILABLE: "",
    VENUE: "",
    MOV_ID: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTicketsData({
      ...ticketsData,
      [e.target.name]: e.target.value.toString(),
    });
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const createSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let data = {
      ...ticketsData,
      TCK_NO: parseInt(ticketsData.TCK_NO),
      TCK_AVAILABLE: parseInt(ticketsData.TCK_AVAILABLE),
      MOV_ID: parseInt(ticketsData.MOV_ID),
    };

    axios.post("/ticket/create", data).then((response: AxiosResponse) => {
      console.log(response.data);
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
      <h1 className="create-heading">CREATE NEW TICKETS</h1>
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
          name="TCK_NO"
          placeholder="Ticket Number"
          type="number"
          value={ticketsData.TCK_NO}
          changeHandler={changeHandler}
        />
        <AppInput
          name="TCK_AVAILABLE"
          placeholder="Tickets Available"
          type="number"
          value={ticketsData.TCK_AVAILABLE}
          changeHandler={changeHandler}
        />
        <AppInput
          name="VENUE"
          placeholder="Venue"
          value={ticketsData.VENUE}
          changeHandler={changeHandler}
        />
        <AppInput
          name="MOV_ID"
          placeholder="Movie Id"
          type="number"
          value={ticketsData.MOV_ID}
          changeHandler={changeHandler}
        />
        <AppSubmitButton title={"CREATE"} />
      </form>
    </div>
  );
};

export default CreateMovie;
