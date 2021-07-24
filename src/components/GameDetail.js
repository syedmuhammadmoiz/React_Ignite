import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Imageresize } from "../util";
import apple from "../img/apple.svg";
import gamesPad from "../img/games.svg";
import palystation from "../img/play.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintedo from "../img/ninte.svg";
import star from "../img/star.png";
import gold from "../img/gold.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i >= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="gold" key={i} src={gold} />);
      } else {
        stars.push(<img alt="star" key={i} src={star} />);
      }
    }
    return stars;
  };

  const getPlaform = (platform) => {
    switch (platform) {
      case "Playstation 4":
        return palystation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintedo;
      case "IOS":
        return apple;
      default:
        return gamesPad;
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platfroms</h3>
                <Platform>
                  {game.platforms
                    ? game.platforms.map((data) => (
                        <img
                          alt="games"
                          key={data.platform.id}
                          src={getPlaform(data.platform.name)}
                        />
                      ))
                    : ""}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={Imageresize(game.background_image, 1280)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results
                ? screen.results.map((screen) => (
                    <img
                      src={Imageresize(screen.image, 1280)}
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
  z-index: 5;
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
  z-index: 10px;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platform = styled(motion.div)`
  display: flex;
  img {
    margin-left: 3rem;
    width: 40px;
    height: 40px;
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
