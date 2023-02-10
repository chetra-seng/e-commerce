import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import Head from "../../components/Head";
import DeshboardSidebar from "../../components/seller/DeshboardSidebar";

export default function ProductsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Head title={"Products"} />
      <Flex>
        <DeshboardSidebar />
        <Box className="w-5/6">
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            h="100vh "
          >
            <Text fontWeight={"bold"} fontSize="5xl" mb={5}>
              No Product
            </Text>
            <Button onClick={onOpen}>
              <BiPlus size={30} />
              Create New Product
            </Button>
            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader fontSize={23}>New Product</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text fontSize={18} mb={2}>
                    Product Name
                  </Text>
                  <Input placeholder="....." mb={5}></Input>
                  <Text fontSize={18} mb={2}>
                    Qty
                  </Text>
                  <Input placeholder="....."mb={5}></Input>
                  <Text>Add to Category</Text>
                  <Select placeholder="Choose Category "mb={5}>
                    <option value="option1">Category 1</option>
                    <option value="option2">Category 2</option>
                    <option value="option3">Category 3</option>
                  </Select>
                  <Text fontSize={18} my={2}>
                    Image
                  </Text>
                  <Box h={200} w={400} className="border rounded-md">
                    <Flex
                      flexDir={"column"}
                      justify={"center"}
                      alignItems={"center"}
                      h="100%"
                    >
                      <BsImages size={40} />
                      <Text fontWeight={"bold"} fontSize={18}>
                        Choose a img or drag it here
                      </Text>
                      <Text> Support JPEG (.jpg .jpeg)</Text>
                    </Flex>
                  </Box>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                  <Button colorScheme="orange" ml={3}>
                    Save
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
