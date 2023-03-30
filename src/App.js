import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { darkTheme, lightTheme } from "./utility/Theme";
import styled, { ThemeProvider } from "styled-components";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
