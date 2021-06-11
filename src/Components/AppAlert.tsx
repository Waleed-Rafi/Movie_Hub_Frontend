import React from "react";

const AppAlert: React.FC<{
  visible: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}> = ({ visible = false, errorMessage, successMessage }) => {
  let alert: JSX.Element | null = null;
  let messageClass: string = "alert-danger";

  if (visible) {
    if (errorMessage) messageClass = "alert-danger";
    else if (successMessage) messageClass = "alert-success";
    alert = (
      <div
        className={`alert alert-dismissible fade show ${messageClass}`}
        role="alert"
        style={{ width: "25rem" }}
      >
        {errorMessage}
        {successMessage}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  }
  return <div>{alert}</div>;
};

export default AppAlert;
