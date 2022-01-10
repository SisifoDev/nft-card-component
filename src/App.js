import Card from "./components/card";

import styled, { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    white: "#90aed9",
    //Primary
    softBlue: "hsl(215, 51%, 70%)",
    cyan: "hsl(178, 100%, 50%)",
    // Neutral
    mainBG: "hsl(217, 54%, 11%)",
    cardBG: "hsl(216, 50%, 16%)",
    line: "hsl(215, 32%, 27%)",
    //Typography
    paragraph: "18px",
    //variant
    cyanVariant: "hsla(178, 100%, 50%, 0.5)",
  };
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Card />

        <Attribution>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/SisifoDev"
            target="_blank"
            rel="noreferrer"
          >
            Héctor Manuel Perdomo
          </a>
          .
        </Attribution>
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBG};
`;

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  & a {
    color: hsl(228, 45%, 44%);
  }
`;
