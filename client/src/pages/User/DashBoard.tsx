import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillDashboard, AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import Head from "../../components/Head";

export default function DashBoardPage() {
  return (
    <>
      <Head title={"DashBoard"} />
      <Flex>
        <Box w={"80"} h="100vh " boxShadow="2xl ">
          <Flex className="logo" gap={2} align={"center"} h="10vh ">
            <Image src="./logo.png" w={20} />
            <Heading size={"lg"} color={"heading"}>
              Cool Ecommerce
            </Heading>
          </Flex>
          <hr />
          <Flex flexDir={"column"} gap={10} marginLeft={"10"} marginTop={"10"}>
            <Flex align={"center"}>
              <AiOutlineDashboard size={35} style={{ marginRight: "10" }} />
              <Text  fontWeight={"bold"} fontSize="xl">DashBoard</Text>
            </Flex>
            <Flex align={"center"}>
              <BiCategory size={35} style={{ marginRight: "10" }}/>
              <Text fontWeight={"bold"} fontSize="xl">Categories</Text>
            </Flex>
            <Flex align={"center"}>
              <MdProductionQuantityLimits size={35} style={{ marginRight: "10" }}/>
              <Text  fontWeight={"bold"} fontSize="xl">Products</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
