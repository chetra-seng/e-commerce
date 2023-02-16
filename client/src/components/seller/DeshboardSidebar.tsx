import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import React from "react";
import { useCookies } from "react-cookie";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BiCategory,
  BiDownArrow,
  BiLock,
  BiLogOut,
  BiUser,
} from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useCustomToast from "../../hooks/useCustomToast";

export default function DeshboardSidebar() {
  const user: any = React.useContext(UserContext);
  const { colorMode } = useColorMode();
  const [, , removeCookie] = useCookies(["user", "token", "role"]);
  const toast = useCustomToast();
  const navigate = useNavigate();
  return (
    <>
      <Box
        h="100vh "
        minW="max"
        boxShadow="2xl "
        bg={colorMode === "light" ? "#333" : "#888"}
        className="w-1/6"
      >
        <Link to={"/seller/dashboard"}>
          <Flex minW="max" className="logo" gap={2} align={"center"} h="10vh ">
            <Image src="../logo.png" w={20} />
            <Heading minW="max" size={"lg"} color={"heading"}>
              Cool Ecommerce
            </Heading>
          </Flex>
        </Link>
        <hr />
        <Flex flexDir={"column"} marginTop={"10"}>
          <Link to={"/seller/dashboard"}>
            <Box
              _hover={{ bgColor: "heading" }}
              py={5}
              _selected={{ bgColor: "heading" }}
            >
              <Flex align={"center"} marginLeft={"10"}>
                <AiOutlineDashboard size={35} style={{ marginRight: "10" }} />
                <Text fontWeight={"bold"} fontSize="xl">
                  DashBoard
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to={"/seller/categories"}>
            <Box _hover={{ bgColor: "heading" }} py={5}>
              <Flex align={"center"} marginLeft={"10"}>
                <BiCategory size={35} style={{ marginRight: "10" }} />
                <Text fontWeight={"bold"} fontSize="xl">
                  Categories
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to={"/seller/products"}>
            <Box _hover={{ bgColor: "heading" }} py={5}>
              <Flex align={"center"} marginLeft={"10"}>
                <MdProductionQuantityLimits
                  size={35}
                  style={{ marginRight: "10" }}
                />
                <Text fontWeight={"bold"} fontSize="xl">
                  Products
                </Text>
              </Flex>
            </Box>
          </Link>
        </Flex>
      </Box>
      <Box w="max" position="absolute" top={2} right="120px">
      <Menu>
        <MenuButton as={Button} variant={"ghost"}>
          <Flex gap={2} alignItems={"center"}>
            <Avatar src={faker.image.people()} size={"sm"} />
            {user.name}
            <BiDownArrow />
          </Flex>
        </MenuButton>
        <MenuList w={15}>
          <MenuGroup title="Profile">
            <MenuItem icon={<BiUser size={20} />}>View Profile</MenuItem>
          </MenuGroup>
          <MenuGroup title="Acccount">
            <MenuItem icon={<BiLock size={20} />}>Change Password</MenuItem>
            <MenuItem
              icon={<BiLogOut size={20} />}
              onClick={() => {
                removeCookie("token");
                removeCookie("user");
                removeCookie("role");
                toast("Logout Success", "success");
                navigate("/");
              }}
            >
              Log Out
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      </Box>
    </>
  );
}
