import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.icon" />
        <link rel="apple-shortcut-icon" href="/favicon.icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="React Avançado para projetos" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
