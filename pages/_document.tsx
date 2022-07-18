import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" color-scheme="auto" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#fcfcfc" />
          <meta name="color-scheme" content="light dark" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        </Head>

        <body className="overflow-y-scroll bg-surface text-default selection:bg-default selection:text-surface">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
