import '@styles/globals.css'
import { Helmet } from 'react-helmet'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Signup from '@components/Signup'
import KeyboardAvoidingView from 'react';

function Application({ Component, pageProps }) {
  return(
    <>
      <Helmet>
        <html lang="en" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "dvgo90m9vk");`}
        </script>
      </Helmet>
      <div className="flex flex-col h-screen">
        <Header />
        <KeyboardAvoidingView>
          <main className="flex grow max-w-5xl ml-auto mr-auto mt-5">
              <Component {...pageProps} />
          </main>
        </KeyboardAvoidingView>
        <Signup />
        <Footer />
      </div>
    </>
  ) 
}

export default Application
