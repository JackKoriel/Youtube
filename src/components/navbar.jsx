import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
`;

const Search = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 90%;
  padding: 3px 2px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchIcon />
          </Search>
          <Button>
            <AccountCircleIcon />
            Sign In
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
