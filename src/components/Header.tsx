import React from "react";
import Nav from "../routes/Nav";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => (
  <div>
    <Nav />
  </div>
);

export default Header;
