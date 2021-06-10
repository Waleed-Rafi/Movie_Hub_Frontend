import React from "react";
import "./Components.css";

export default function Card() {
  let arr = [1, 2, 3, 4, 5, 6];
  let temp: Array<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > = arr.map(() => {
    return (
      <div className="card">
        <img
          src="https://www.easterneye.biz/wp-content/uploads/2021/04/Radhe-trailer.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
          <div style={{ textAlign: "left" }}>
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginRight: "20px", width: "9rem" }}
            >
              Edit
            </a>
            <a href="#" className="btn btn-danger" style={{ width: "9rem" }}>
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div className="card-group">{temp}</div>;
}
