import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name?: string;
};

const Nav = ({ name }: Props) => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about" className="ml-6">
      About
    </Link>
    <Link to="/signin" className="ml-6">
      SignIn
    </Link>
    <Link to="/signup" className="ml-6">
      SignUp
    </Link>
    <Link to="/somePage" className="ml-6">
      NotFound
    </Link>
  </div>
);

export default Nav;
