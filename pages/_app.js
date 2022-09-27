import '@styles/globals.css'
import { Helmet } from 'react-helmet'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Signup from '@components/Signup'

function Application({ Component, pageProps }) {
  return(
    <>
      <Helmet>
        <html lang="en" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex grow max-w-5xl ml-auto mr-auto mt-5">
            <Component {...pageProps} />
        </main>
        <Signup />
        <Footer />
      </div>
    </>
  ) 
}

export default Application
