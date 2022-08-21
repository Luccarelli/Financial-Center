import React from "react";
import ResumeItem from "../resumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        Title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        Value={income}
        color="green"
      />
      <ResumeItem
        Title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        Value={expense}
        color="red"
      />
      <ResumeItem
        Title="Total"
        Icon={FaDollarSign}
        Value={total}
        color="#00BFFF"
      />
    </C.Container>
  );
};

export default Resume;
