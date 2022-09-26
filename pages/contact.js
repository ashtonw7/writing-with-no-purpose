import HeadTag from "@components/HeadTag";
import PageTitle from "@components/PageTitle";

export default function Contact() {
  return (
    <>
      <HeadTag title="Contact | Writing with No Purpose" />
      <div className={`w-screen h-full flex flex-col `}>
        <PageTitle title="Contact" />
        
        {/* Computer */}
        <div className="hidden verticalindex:flex justify-center w-full">
          <div className="flex justify-center verticalindex:justify-between w-4/5">
            <img className="object-scale-down w-2/5 h-2/5 float-left verticalindex:h-auto regular:w-[17rem]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            
            <p className="font-tinos text-2xl w-[30rem] text-center verticalindex:text-left mt-[3rem] contactmargin:mt-[5rem]">
              If you would like to contact me, you can reach me at <a href="mailto:ashton.winters@aya.yale.edu" className="hover:underline italic">ashton.winters@aya.yale.edu</a>.
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex justify-center verticalindex:hidden">
          <div className="flex flex-col justify-center w-4/5">
            <img className="object-scale-down h-[100px]" src={'/assets/images/letter.png'} alt={'Letter being mailed'}/>
            <p className="italic text-[1.2rem] weirdcontact:text-2xl text-center h-full font-tinos">
              If you would like to contact me, you can reach me at
            </p>
            <a href="mailto:ashton.winters@aya.yale.edu" className="hover:underline italic text-center text-[1.2rem] weirdcontact:text-2xl font-tinos">ashton.winters@aya.yale.edu</a>.
          </div>
        </div>

      </div>
    </>
  )
}