import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "../../components/Head";
import DeshboardSidebar from "../../components/seller/DeshboardSidebar";

export default function DashBoard() {

  return (
    <>
      <Head title={"DashBoard"} />
      <Flex >
        <DeshboardSidebar/>
        <Box className="w-5/6">
          <Flex justify={'center'} alignItems={'center'} h="100vh ">
            <Text fontWeight={"bold"} fontSize="6xl">
              To be Continue...
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
