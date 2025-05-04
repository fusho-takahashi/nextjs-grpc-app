"use client"; // ← ここがポイント！

import { extendTheme } from "@yamada-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
})();
