import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1];
  if (error) return null;

  // if (isLoading) return <Spinner />;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {isLoading &&
                skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
