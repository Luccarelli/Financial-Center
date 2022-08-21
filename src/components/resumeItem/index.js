import React from "react";
import * as C from "./styles";

const ResumeItem = ({ Title, Icon, Value, color }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{Title}</C.HeaderTitle>
        <Icon color={color} />
      </C.Header>
      <C.Total>{Value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
