import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

const router = useRouter;

export default function Document() {
  return (
    <Html>
      <Head>            
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
