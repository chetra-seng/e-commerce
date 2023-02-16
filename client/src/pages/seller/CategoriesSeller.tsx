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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import Head from "../../components/Head";
import DeshboardSidebar from "../../components/seller/DeshboardSidebar";

export default function CategoriesSeller() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Head title={"Categories"} />
      <Flex>
        <DeshboardSidebar/>
        <Box className="w-5/6">
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            h="100vh "
          >
            <Text fontWeight={"bold"} fontSize="5xl" mb={5}>
              No Category
            </Text>
            <Button onClick={onOpen}>
              <BiPlus size={30} />
              Create New Category
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
                <AlertDialogHeader fontSize={23}>New Category</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  <Text fontSize={18} mb={2}>
                    Category Name
                  </Text>
                  <Input placeholder="....."></Input>
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
                      <BsImages size={40}/>
                      <Text fontWeight={'bold'}  fontSize={18}>Choose a img or drag it here</Text>
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
