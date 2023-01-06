import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  fonts: {
    heading: `'Spirax', sans-serif`,
    body: `'Open Sans Condense', sans-serif`,
  },
  semanticTokens: {
    colors: {
      heading: {
        default: "orange.400",
        _dark: "orange.200",
      },
    },
  },
});
