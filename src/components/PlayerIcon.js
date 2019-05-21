import React from "react";

const PlayerIcon = ({ image, name, rating }) => {
  return (
    <div>
      <img className="ui avatar image" src={image}/>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{rating}</div>
      </div>
    </div>
  );
};

export default PlayerIcon;
