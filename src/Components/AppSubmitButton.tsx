import React from "react";

const AppSubmitButton: React.FC<{ title: string }> = ({ title = "" }) => {
  return (
    <div className="d-grid gap-2 col-20 mx-auto">
      <button className="btn btn-primary create-submit-button" type="submit">
        {title}
      </button>
    </div>
  );
};

export default AppSubmitButton;
