import * as React from "react";

interface MoviesData {
  MOV_ID: number;
  MOV_NAME: string;
  MOV_LANG: string;
  MOV_THUMBNAIL: string;
  MOV_HOUR?: string;
  MOV_DATE?: string;
}

const Carousel: React.FC<{ moviesData: MoviesData[] }> = ({ moviesData }) => {
  if (moviesData.length > 3) {
    moviesData = moviesData.slice(0, 4);
  }
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {moviesData.map((data, index) => {
          if (index < 3) {
            return (
              <div
                className={"carousel-item" + (index === 0 ? " active" : "")}
                key={data.MOV_ID}
              >
                <img
                  src={data.MOV_THUMBNAIL}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
