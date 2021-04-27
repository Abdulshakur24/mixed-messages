import React, { useState } from "react";
import styled from "styled-components";
import messages from "./utilities/messages";

const App = () => {
  const [messageArray, setMessageArray] = useState([...messages]);
  const [liveMessage, setLiveMessage] = useState(
    "Click the button to see some quotes!"
  );

  const pickRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    const randomMessage = messageArray.splice(randomIndex, 1)[0];
    if (messageArray.length + 1) setLiveMessage(randomMessage?.message);
  };

  const resetMessageArray = () => {
    setMessageArray([...messages]);
    setLiveMessage("Click the button to see random quotes!");
  };

  return (
    <AppBody>
      <h1>Random Quotes</h1>
      <p>{liveMessage?.message || liveMessage}</p>
      <div className="container">
        <button disabled={!messageArray.length} onClick={pickRandomMessage}>
          {messageArray.length >= 2
            ? `${messageArray.length} quotes left`
            : `${messageArray.length} quote left`}
        </button>
        <button
          onClick={resetMessageArray}
          disabled={messageArray.length === 20}
        >
          Reset
        </button>
      </div>
    </AppBody>
  );
};

export default App;

const AppBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    width: 20rem;
    height: 10rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }

  .container {
    width: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
      padding: 0.5rem;
      margin: 1rem;
      border: 1px solid white;
      background-color: transparent;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      &:active {
        transform: scale(0.95);
      }
      &:disabled {
        opacity: 0.4;
        cursor: default;
      }
    }
  }
`;
