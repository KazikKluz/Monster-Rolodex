import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
    </div>
  );
};

export default Card;
