import {
  Avatar,
  Box,
  Button,
  Container,
  extendTheme,
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
import { GoThreeBars } from "react-icons/go";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const user: any = React.useContext(UserContext);
  const [, , removeCookie] = useCookies(["user", "token"]);
  const toast = useCustomToast();
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  const theme = extendTheme({ breakpoints });
  return (
    <>
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
                Cool Ecommerce
              </Heading>
            </Flex>
          </Link>
          <Flex className="" fontWeight={"bold"} display={{ base: "none", xl: "flex" }}>
            <ul className="px-2 text-sm hover:text-gray-500">
              <Link to={""}>Popular for Men</Link>
            </ul>
            <ul className="px-2 text-sm hover:text-gray-500">
              <Link to={""}>For Women</Link>
            </ul>
            <ul className="px-2 text-sm hover:text-gray-500">
              <Link to={""}>In Trending</Link>
            </ul>
            <ul className="px-2 text-sm hover:text-gray-500">
              <Link to={""}>Most Popular</Link>
            </ul>
          </Flex>
          <Flex flexDir={"row"} display={{ base: "none", xl: "flex" }}>
            <Input w={"50"} />
            <Box
              as={"button"}
              className={
                "bg-orange-400 hover:bg-orange-300 dark:bg-orange-200 flex justify-center items-center rounded-r-lg"
              }
              w={"14"}
              h={"10"}
            >
              <BiSearch size={25} />
            </Box>
          </Flex>
          <Flex
            flexDir={"row"}
            gap={10}
            align={"center"}
            display={{ base: "none", xl: "flex" }}
          >
            <Box as="button" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <BiMoon size={25} />
              ) : (
                <BiSun size={25} />
              )}
            </Box>
            {/* <Link to={"/wishlist"}>
              <BiHeart size={25} />
            </Link> */}
            <Link to={"/shopcartpage"}>
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
                    <MenuItem icon={<BiUser size={20} />}>
                      View Profile
                    </MenuItem>
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
          <Menu>
            <MenuButton
              as={IconButton}
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.100" }}
              icon={<GoThreeBars />}
              display={{ base: "flex", xl: "none" }}
            />

            <MenuList>
              <MenuGroup title="Category">
                <hr />
                <MenuItem fontWeight={"bold"}>Men Shoes</MenuItem>
                <MenuItem fontWeight={"bold"}>Men Shirt</MenuItem>
                <MenuItem fontWeight={"bold"}>Gaming</MenuItem>
                <MenuItem fontWeight={"bold"}>Sports</MenuItem>
                <MenuItem fontWeight={"bold"}>Electronic</MenuItem>
                <MenuItem fontWeight={"bold"}>DIY</MenuItem>
                <hr />

                <MenuItem
                  icon={<BiLogIn size={20} />}
                  onClick={() => navigate("/login")}
                  display={{ base: "flex", xl: "none" }}
                >
                  Log In
                </MenuItem>
                <MenuItem
                  icon={<BiPlus size={20} />}
                  onClick={() => navigate("/signup")}
                  display={{ base: "flex", xl: "none" }}
                >
                  Sign Up
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
