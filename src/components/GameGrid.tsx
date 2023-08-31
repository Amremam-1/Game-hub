import UseGames from "../hooks/UseGames";

const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
