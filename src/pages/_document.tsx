import localFontLibrary from "@/fonts/local-fonts";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}