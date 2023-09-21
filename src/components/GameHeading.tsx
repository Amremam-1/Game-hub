import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import usePlatFrom from "../hooks/usePlatform";
import usePlatFroms from "../hooks/usePlatForms";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatFrom(gameQuery.platformId);

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};
export default GameHeading;
