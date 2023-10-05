import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface props {
  children: string;
}
const ExpandableText = ({ children }: props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summery = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summery}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less More" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
