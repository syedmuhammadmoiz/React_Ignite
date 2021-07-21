import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Imageresize } from "../util";

const GameDetail = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platfroms</h3>
                <Platform>
                  {game.platforms
                    ? game.platforms.map((data) => (
                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                      ))
                    : ""}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <img src={Imageresize(game.background_image, 1280)} alt="image" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results
                ? screen.results.map((screen) => (
                    <img
                      src={Imageresize(screen.image, 180)}
                      key={screen.id}
                      alt="game"
                    />
                  ))
                : ""}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
