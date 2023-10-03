import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />

      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page does not exsit"
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
