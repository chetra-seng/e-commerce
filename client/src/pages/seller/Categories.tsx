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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Head from "../../components/Head";
import DeshboardSidebar from "../../components/seller/DeshboardSidebar";

export default function CategoriesPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <Head title={"Categories"} />
      <Flex>
        <DeshboardSidebar />
        <Box className="w-5/6">
          <Flex justify={"center"} alignItems={"center"} h="100vh ">
            <Text fontWeight={"bold"} fontSize="6xl">
              <Button onClick={onOpen}>Discard</Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Are you sure you want to discard all of your notes? 44 words
                    will be deleted.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button colorScheme="red" ml={3}>
                      Yes
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
