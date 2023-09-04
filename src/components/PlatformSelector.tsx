import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { platform } from "../hooks/UseGames";
import usePlatFrom from "../hooks/usePlatForm";

interface props {
  onSelectedPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: props) => {
  const { data, error } = usePlatFrom();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
