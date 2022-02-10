import React from "react";
import logo from "@/assets/img/logo.svg";
import Hello from "@/components/Hello";

type Props = {
  name?: string;
};

const Home = ({ name }: Props) => (
  <div>
    <Hello name="Home" />
    <img src={logo} />
  </div>
);

export default Home;
