import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let removed = people.filter((person) => person.id !== id);
    setPeople(removed);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className="btn" onClick={() => removePerson(id)}>
                Remembered!
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
