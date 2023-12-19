import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import UseGames from "../hooks/UseGames"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"
import GameGard from "./GameGard"

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = UseGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const fetchCountGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  if (error) return <Text>{error.message}</Text>

  return (
    // <InfiniteScroll
    //   dataLength={fetchCountGames}
    //   hasMore={!!hasNextPage}
    //   next={() => fetchNextPage()}
    //   loader={<Spinner />}
    // >
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameGard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
      <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </SimpleGrid>
    // </InfiniteScroll>
  )
}

export default GameGrid
