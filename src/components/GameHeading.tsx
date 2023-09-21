import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatFrom from "../hooks/usePlatForm";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatFrom();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};
export default GameHeading;
