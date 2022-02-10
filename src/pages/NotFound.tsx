import React from "react";

type Props = {
  name?: string;
};

const NotFound = ({ name }: Props) => (
  <div>
    <h1>Page not found</h1>
  </div>
);

export default NotFound;
