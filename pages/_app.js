import '@styles/globals.css'
import Navbar from '@components/Navbar'

function Application({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) 
}

export default Application
