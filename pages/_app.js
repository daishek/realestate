import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/provider'

import { Layout } from '../components'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
