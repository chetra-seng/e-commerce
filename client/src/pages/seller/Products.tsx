import { Box, Flex } from "@chakra-ui/react";
import Head from "../../components/Head";
import DeshboardSidebar from "../../components/seller/DeshboardSidebar";

export default function ProductsPage(){
  return(
    <>
    <Head title={"Products"} />
      <Flex>
        <DeshboardSidebar />
        <Box className="w-5/6">
          
        </Box>
      </Flex>
    </>
  )
}