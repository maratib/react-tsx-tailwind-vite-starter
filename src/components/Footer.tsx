import React from "react";

type Props = {
  name?: string;
};

const Footer = ({ name }: Props) => (
  <div className="bg-gray-500 h-40">
    <h1>Footer</h1>
  </div>
);

export default Footer;
