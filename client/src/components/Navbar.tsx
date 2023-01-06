import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <Container maxW={"8xl"} py={2}>
      <Flex
        flexDir={"row"}
        className={"w-full"}
        justify={"space-between"}
        align={"center"}
      >
        <Flex align={"center"} gap={20}>
          <Link to={"/"}>
            <Flex className="logo" gap={3} align={"center"}>
              <Image src="./logo.png" w={20} />
              <Heading size={"lg"}>Cool Commerce</Heading>
            </Flex>
          </Link>
          <Flex gap={2}>
            <Button variant={"ghost"}>Home</Button>
            <Button variant={"ghost"}>Feature</Button>
            <Button variant={"ghost"}>Contact</Button>
          </Flex>
        </Flex>
        <Flex>
          <IconButton icon={<BsMoon />} aria-label="Moon icon" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
