import React from "react";

const PlayerIcon = ({ image, name, rating, ratingImage }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">Rating: {rating}</div>
      </div>
    </div>
  );
};

export default PlayerIcon;
