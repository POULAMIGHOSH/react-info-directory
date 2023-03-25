import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

export default function ErrorModel(props) {
  return (
    <Card>
      <Backdrop onClick={props.handleError}>
        <Model>
          <Header>
            <h2>{props.title}</h2>
          </Header>
          <Content>
            <p>{props.msg}</p>
          </Content>
          <Actions>
            <Button onClick={props.handleError}>Ok</Button>{" "}
          </Actions>
        </Model>
      </Backdrop>
    </Card>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Model = styled.div`
  position: fixed;

  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
  & h2 {
    margin: 0;
    color: white;
  }
`;
const Content = styled.div`
  padding: 1rem;
`;

const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
