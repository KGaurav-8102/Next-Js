import Head from 'next/head'
import Footer from '@/Layout/Footer'
import Header from '@/Layout/Header'
import '/styles/globals.css'
import '/styles/layout.css'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return(
    <>
      <Head>
        <title>KgSoftech</title>
        <meta name='description' content='free tutorials for web development' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
