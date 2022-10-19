import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

const router = useRouter;

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
