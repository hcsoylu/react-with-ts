import React from "react";

type PersonProps = {
  personName: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.personName.first} {props.personName.last}
    </div>
  );
};

export default Person;
