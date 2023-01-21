import HeadTag from "@components/HeadTag";
import PageTitle from "@components/PageTitle";

export default function Contact() {
  return (
    <>
      <HeadTag title="Contact | Fat Puppet" link="contact" image='letter' description={"Fat Puppet is a humorous online publication written by Ashton Winters. Funny stories, offbeats essays, wacky lists—at Fat Puppet you can have it all."} />
      <div className={`w-screen h-full flex flex-col`}>
        <PageTitle title="Contact" />
        
        {/* Computer */}
        <div className="hidden verticalindex:flex justify-center w-full">
          <div className="flex justify-center verticalindex:justify-between w-4/5">
            <img  height="512" width="512" className="object-scale-down w-2/5 h-2/5 float-left verticalindex:h-auto regular:w-[17rem]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            
            <p className="font-tinos text-2xl w-[30rem] text-center verticalindex:text-left mt-[3rem] contactmargin:mt-[5rem]">
              If you would like to contact me, you can reach me at <a href="mailto:ashton.winters@aya.yale.edu" className="hover:underline italic">ashtonwinters@fatpuppet.com</a>.
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex justify-center verticalindex:hidden">
          <div className="flex flex-col justify-center w-4/5">
            <img className="object-scale-down h-[100px]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            <p className="text-[1.2rem] weirdcontact:text-2xl text-center h-full font-tinos">
              If you would like to contact me, you can reach me at
            </p>
            <a href="mailto:ashton.winters@aya.yale.edu" className="hover:underline italic text-center text-[1.2rem] weirdcontact:text-2xl font-tinos">
              ashtonwinters@fatpuppet.com
              <span className="content vertical-index:hidden">.</span>
            </a>
            <span className="hidden vertical-index:content">.</span>
          </div>
        </div>

      </div>
    </>
  )
}
