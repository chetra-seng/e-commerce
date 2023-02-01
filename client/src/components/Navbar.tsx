import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  BiCart,
  BiDownArrow,
  BiHeart,
  BiLock,
  BiLogIn,
  BiLogOut,
  BiMoon,
  BiPlus,
  BiSearch,
  BiSun,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import { UserContext } from "../contexts/UserContext";
import { faker } from "@faker-js/faker";
import { useCookies } from "react-cookie";
import useCustomToast from "../hooks/useCustomToast";
import { Select } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const user: any = React.useContext(UserContext);
  const [, , removeCookie] = useCookies(["user", "token"]);
  const toast = useCustomToast();

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

        <Flex flexDir={"row"} gap={"5"}>
          <Select placeholder="Select option">
            <option value="option1">Popular for men</option>
            <option value="option2">For Women</option>
            <option value="option3">In Trending</option>
            <option value="option3">Most Popular</option>
          </Select>
          <Flex flexDir={"row"}>
            <Input w={"lg"} />
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
          {user ? (
            <Menu>
              <MenuButton as={Button} variant={"ghost"}>
                <Flex gap={2} alignItems={"center"}>
                  <Avatar src={faker.image.cats()} size={"sm"} />
                  {user.name}
                  <BiDownArrow />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem icon={<BiUser size={20} />}>View Profile</MenuItem>
                </MenuGroup>
                <MenuGroup title="Acccount">
                  <MenuItem icon={<BiLock size={20} />}>
                    Change Password
                  </MenuItem>
                  <MenuItem
                    icon={<BiLogOut size={20} />}
                    onClick={() => {
                      removeCookie("token");
                      removeCookie("user");
                      toast("Logout Success", "success");
                    }}
                  >
                    Log Out
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BiUserCircle size={25} />}
                arial-label={"User icon"}
                variant={"ghost"}
              />
              <MenuList>
                <MenuItem
                  icon={<BiLogIn size={20} />}
                  onClick={() => navigate("/login")}
                >
                  Log In
                </MenuItem>
                <MenuItem
                  icon={<BiPlus size={20} />}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
