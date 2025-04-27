import React, { useEffect, useState } from "react";
import { connectWebSocket } from "./websocket/websocket";
import { BasicForm } from "./components/BasicForm";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
`;

const ResponseBox = styled.div`
  margin: 2rem auto 0 auto;
  padding: 1rem 2rem;
  background: #e6ffe6;
  color: #006600;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  text-align: center;
`;

const App: React.FC = () => {
  const [serverMessage, setServerMessage] = useState<string>("");

  useEffect(() => {
    connectWebSocket(setServerMessage);
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Embedded Finance Form
      </h1>
      <BasicForm />
      {serverMessage && <ResponseBox>✅ {serverMessage}</ResponseBox>}
    </Container>
  );
};

export default App;
