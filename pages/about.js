import HeadTag from "@components/HeadTag";
import PageTitle
 from "@components/PageTitle";
export default function Home({ posts }) {
  return (
    <div>
      <HeadTag title="About | Fat Puppet" />
        <PageTitle title="About" />
        <div className="flex justify-center mt-5">
          <div className="hidden w-4/5 verticalindex:inline">
            <img className="object-scale-down w-2/5 h-2/5 float-left mr-5 verticalindex:h-auto regular:w-96" src={'/assets/images/portrait.png'} alt={'Ashton Winters'}/>
            <div>
              <p className="text-center italic text-2xl mt-3 mb-5 text-gray-600 font-medium font-tinos">
                "Laughing at a puppet is funny. But laughing at a guy who thinks a puppet is funny is even funnier."
              </p>
              
              <p className="mb-5 text-2xl font-tinos">
                All content on this website is written by Ashton Winters. He's also the one who wrote that quote up there,
                and he always keeps it mind whenever he's writing any of these offbeat essays and stories.
              </p>
              <p className="mb-5 text-2xl font-tinos">
                He's always enjoyed writing, and he really got into writing comedy while studying at Yale. He is very funny, is very handsome and is very good at bragging about himself in third person but he's
                getting kind of sick of it by this point to be honest so, strap on in, I'm getting personal and switching to first person now. 
              </p>
              <p className="mb-5 text-2xl font-tinos">  
                Yep, I changed it up on you there right in the middle of a sentence. Well, more like the end of the sentence but you get the gist. I do things like that, because I, or he, to switch back to third person for a second, enjoy writing things are entertaining to me.
                Hopefully you find them entertaining as well.
              </p>
            </div>
          </div>
        </div>

      <div className="content verticalindex:hidden">
          <div className="flex flex-col items-center">
            <img className="object-scale-down w-2/5 h-2/5" src={'/assets/images/portrait.png'} alt={'Ashton Winters'}/>

            <div className="text-center flex flex-col w-4/5">
              <p className="italic text-2xl text-center text-gray-600 mb-5 font-tinos">
                "Laughing at a puppet is funny. But laughing at a guy who thinks a puppet is funny is even funnier."
              </p>

              <p className="text-2xl mb-5 text-left font-tinos">
                All content on this website is written by Ashton Winters. He's also the one who wrote that quote up there,
                and he always keeps it mind whenever he's writing any of these offbeat essays and stories.
              </p>
              <p className="text-2xl mb-5 text-left font-tinos">
                He's always enjoyed writing, and he really got into writing comedy while studying at Yale. He is very funny, is very handsome and is very good at bragging about himself in third person but he's
                getting kind of sick of it by this point to be honest so, strap on in, I'm getting personal and switching to first person now. 
              </p>

              <p className="text-2xl mb-5 text-left font-tinos">
                Yep, I changed it up on you there right in the middle of a sentence.Well, more like the end of the sentence but you get the gist. I do things like that, because I, or he, to switch back to third person for a second just for fun, enjoy writing things that are entertaining to me.
                Hopefully you find them entertaining as well.
              </p>
            </div>
          </div>  
      </div>

      <div className="flex justify-center">
          <div className="item-center w-4/5 border-t">
            <p className="text-center bold text-2xl verticalindex:text-4xl mt-5 mb-5 font-tinos">
              FAQs
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              How often do you make new posts?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              I write these things whenever inspiration strikes. I try to make that happen around once a week.
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              Who made this website?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              Me. I programmed it all because I'm a huge dork.
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              Why doesn't this website look that good compared to some of my favorite websites that are so much cooler?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              Because I'm not as big of a dork as the people who made those cool websites.
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              I am a person who is well-connected to other people who would pay you to write funny things. Is there a way I can contact you?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              Hello there. Yes, go to the contact section and reach out to me. Also, this isn't really a frequently asked question, but I would like it to be one.
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              Who makes all those little doodles?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              I make all those little doodles.
            </p>

            <p className="text-left italic text-2xl verticalindex:text-2xl mb-5 font-tinos">
              Will you come to my wedding?
            </p>
            <p className="text-left text-2xl verticalindex:text-2xl mb-10 font-tinos">
              Yes.
            </p>

          </div>
      </div>
    </div>
  );
}
