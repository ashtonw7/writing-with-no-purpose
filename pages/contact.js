import HeadTag from "@components/HeadTag";
import PageTitle from "@components/PageTitle";

export default function Contact() {
  return (
    <div>
      <HeadTag title="Contact | Writing with No Purpose" />
        <PageTitle title="Contact" />

        <div className="flex justify-center">
          <div className="items-center w-4/5 regular:inline">
            <div className="flex justify-center regular:inline">
            <img className="object-scale-down w-2/5 h-2/5 verticalindex:h-auto regular:w-48 mt-3 verticalindex:mb-3 verticalindex:ml-3 verticalindex:mr-5 regular:float-left" src={'/assets/images/letter.png'} alt={'Ashton Winters'}/>
            </div>
            <div className="regular:flex regular:items-center regular:h-full">
              <p className="text-center regular:text-left font-garramond text-lg verticalindex:text-2xl">
                If you would like to contact me, you can reach me at <a href="mailto:ashton.winters@aya.yale.edu" className="hover:underline italic">ashton.winters@aya.yale.edu</a>.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}