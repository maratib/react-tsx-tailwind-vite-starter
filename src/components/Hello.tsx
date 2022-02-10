import React from "react";

type Props = {
  name?: string;
};

const Hello = ({ name }: Props) => (
  <div>
    <h1 className="text-blue-400">{name}</h1>
  </div>
);

export default Hello;
