import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const Coming = (props) => {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/come/${props.title}`, {
      state: props,
    });
  };

  return (
    <div>
      <div className="come-poster" onClick={onClickMovieItem}>
        <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
        <div className="come-info">
          <h4>{props.title}</h4>
          <div className="come-star">
            <span className="star">
              <p>⭐</p>
              <p>{props.vote_average}</p>
            </span>
            <p>{props.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;
