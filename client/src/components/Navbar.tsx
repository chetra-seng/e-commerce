import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import {
  BiCart,
  BiHeart,
  BiMoon,
  BiSearch,
  BiSun,
  BiUserCircle,
} from "react-icons/bi";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"8xl"} py={2}>
      <Flex
        flexDir={"row"}
        className={"w-full"}
        justify={"space-between"}
        align={"center"}
      >
        <Link to={"/"}>
          <Flex className="logo" gap={3} align={"center"}>
            <Image src="./logo.png" w={20} />
            <Heading size={"lg"} color={"heading"}>
              Cool Commerce
            </Heading>
          </Flex>
        </Link>

        <Flex flexDir={"row"}>
          <Input w={"xl"} />
          <Box
            as={"button"}
            className={
              "bg-orange-400 hover:bg-orange-300 dark:bg-orange-200 flex justify-center items-center rounded-lg"
            }
            w={"14"}
            h={"10"}
          >
            <BiSearch size={25} />
          </Box>
        </Flex>
        <Flex flexDir={"row"} gap={10} align={"center"}>
          <Box as="button" onClick={toggleColorMode}>
            {colorMode === "light" ? <BiMoon size={25} /> : <BiSun size={25} />}
          </Box>
          <Link to={"/wishlist"}>
            <BiHeart size={25} />
          </Link>
          <Link to={"/carts"}>
            <BiCart size={25} />
          </Link>
          <Link to={"/user"}>
            <BiUserCircle size={25} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
