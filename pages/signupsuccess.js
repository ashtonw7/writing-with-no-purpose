import HeadTag from "@components/HeadTag";
import PageTitle from "@components/PageTitle";
import Head from "next/head"

export default function SignupSuccess() {
  return (
    <>
      <HeadTag title="Signup Success | Fat Puppet" link="contact" image='letter' description={"Fat Puppet is a humorous online publication written by Ashton Winters. Funny stories, offbeats essays, wacky lists—at Fat Puppet you can have it all."} />
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={`w-screen h-full flex flex-col`}>
        <PageTitle title="Newsletter Signup Success" />
        
        {/* Computer */}
        <div className="hidden verticalindex:flex justify-center w-full">
          <div className="flex justify-center verticalindex:justify-between w-4/5">
            <img className="object-scale-down w-2/5 h-2/5 float-left verticalindex:h-auto regular:w-[17rem]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            
            <p className="font-tinos text-2xl w-[30rem] text-center verticalindex:text-left mt-[3rem] contactmargin:mt-[5rem]">
              Thank you for signing up for the newsletter! You'll receive an email in your inbox whenever new posts are made. I won't spam you, and you're free to unsubscribe at any time!
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex justify-center verticalindex:hidden">
          <div className="flex flex-col justify-center w-4/5">
            <img className="object-scale-down h-[100px]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            <p className="text-[1.2rem] weirdcontact:text-2xl text-center h-full font-tinos">
                Thank you for signing up for the newsletter! You'll receive an email in your inbox whenever new posts are made. I won't spam you, and you're free to unsubscribe at any time!
            </p>
            <span className="hidden vertical-index:content">.</span>
          </div>
        </div>

      </div>
    </>
  )
}