import { SimpleGrid } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameGard from "./GameGard";
const GameGrid = () => {
  const { games, error, isLoading } = UseGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameGard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
