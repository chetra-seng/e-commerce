import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function MenuComponent() {
  return (
    <>
      <Flex className="justify-center items-center bg-black  text-white">
        <Flex className="bg-orange-350">
          <div className=""></div>
          <div className="bg-orange-400">
            <h1 className="px-4 py-4">CATEGORIES</h1>
          </div>
        </Flex>
      </Flex>
    </>
  );
}

export default MenuComponent;
