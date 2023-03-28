import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { darkTheme, lightTheme } from "./utility/Theme";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
        <Main>
          <Navbar />
          <Wrapper>video cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
