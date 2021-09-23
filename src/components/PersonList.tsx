import React from "react";

type PersonListProps = {
  personList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.personList.map((person) => (
        <h1>
          {person.first} {person.last}
        </h1>
      ))}
    </div>
  );
};

export default PersonList;
