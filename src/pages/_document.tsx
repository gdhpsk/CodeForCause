import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>STEM Made Fun</title>
        <meta name="og:title" content="STEM Made Fun"></meta>
        <meta name="og:description" content="STEM Made Fun website for code for cause"></meta>
      </Head>
      <body style={{overflowX: "hidden"}}>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
