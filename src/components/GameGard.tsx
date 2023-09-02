import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/UseGames";
import CriticScore from "./criticScore";
import PlatFormIconList from "./PlatFormIconList";

interface props {
  game: Game;
}

const GameGard = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameGard;
