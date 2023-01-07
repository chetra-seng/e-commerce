import { useColorMode, useToast } from "@chakra-ui/react";
import { ReactElement } from "react";

type ToastStatus = "success" | "info" | "error" | "warning";

const useCustomToast: () => (
  title: string | ReactElement,
  status: ToastStatus
) => void = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  return (title: string | ReactElement, status: ToastStatus = "info") => {
    toast({
      title,
      status,
      position: "top",
      duration: 3000,
      isClosable: true,
      variant: `${colorMode === "light" ? "subtle" : "solid"}`,
    });
  };
};

export default useCustomToast;
