import { SimpleGrid } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameGard from "./GameGard";
const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} spacing={10} padding="10">
        {games.map((game) => (
          <GameGard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
