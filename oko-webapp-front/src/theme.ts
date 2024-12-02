import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const colors = {
  brand: {
    50: { value: "#e6f2ff" },
    100: { value: "#e6f2ff" },
    200: { value: "#bfdeff" },
    300: { value: "#99caff" },
    950: { value: "#001a33" },
  },
  greyScale: {
    200: { value: "#FFF1" },
    500: { value: "#A1A1AA" },
    800: { value: "#FAFAFA" },
  },
};

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts: {
        body: { value: "Inconsolata Variable, monospace" },
      },
    },
    semanticTokens: {
      shadows: {
        oko: { value: "inset 0px 1px 1px 0px #ffffff0d" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
