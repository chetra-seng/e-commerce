import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DeshboardSidebar() {
  return (
    <>
      <Box h="100vh " boxShadow="2xl " className="w-1/6">
        <Link to={"/"}>
          <Flex className="logo" gap={2} align={"center"} h="10vh ">
            <Image src="./logo.png" w={20} />
            <Heading size={"lg"} color={"heading"}>
              Cool Ecommerce
            </Heading>
          </Flex>
        </Link>
        <hr />
        <Flex flexDir={"column"} marginTop={"10"}>
          <Link to={"/dashboardpage"}>
            <Box _hover={{ bgColor: "heading" }} py={5}>
              <Flex align={"center"} marginLeft={"10"}>
                <AiOutlineDashboard size={35} style={{ marginRight: "10" }} />
                <Text fontWeight={"bold"} fontSize="xl">
                  DashBoard
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to={"/categoriespage"}>
            <Box _hover={{ bgColor: "heading" }} py={5}>
              <Flex align={"center"} marginLeft={"10"}>
                <BiCategory size={35} style={{ marginRight: "10" }} />
                <Text fontWeight={"bold"} fontSize="xl">
                  Categories
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link to={"/productspage"}>
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
    </>
  );
}
