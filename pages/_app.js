import '@styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return(
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex grow max-w-5xl ml-auto mr-auto mt-10">
            <Component {...pageProps} />
        </div>
        <Footer />
      </div>

    </>
  ) 
}

export default Application
