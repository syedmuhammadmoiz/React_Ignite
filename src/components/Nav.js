import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/fire.svg";
import { fetchSearch } from "../Actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, settextInput] = useState("");

  const inputHandler = (e) => {
    settextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    settextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" width="70px" height="70px" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text"></input>
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
