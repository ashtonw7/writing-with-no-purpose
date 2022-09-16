import '@styles/globals.css'
import { Helmet } from 'react-helmet'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return(
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex grow max-w-5xl ml-auto mr-auto mt-5">
            <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  ) 
}

export default Application
