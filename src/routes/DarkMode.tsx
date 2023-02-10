import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";

function DarkMode() {
  const [count, setCount] = useState(0);
  const history = useHistory();
  const Home = styled.a`
    display: flex;
    float: right;
    font-size: 40px;
  `;

  return (
    <div>
      <FontAwesomeIcon icon={faMoon} size="2x" />
      <span>Click this!</span>
      <Home href="/">🔙</Home>
    </div>
  );
}

export default DarkMode;
