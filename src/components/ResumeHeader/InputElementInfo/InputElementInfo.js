import React from "react";
import { Container, Input, InputGroup, InputGroupAddon } from "reactstrap";

const inputElementInfo = props => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">{props.heading}</InputGroupAddon>
        <Input onChange={props.changed} maxLength="50" />
      </InputGroup>
      <Container className="container" />
    </div>
  );
};

export default inputElementInfo;
