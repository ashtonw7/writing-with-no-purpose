import HeadTag from "@components/HeadTag";

export default function Home({ posts }) {
  return (
    <div>
      <HeadTag title="About | Writing with No Purpose" />
      <div className="hidden verticalindex:inline">
        <img className="object-scale-down w-2/5 h-2/5 float-left mr-5 verticalindex:h-auto regular:w-96" src={'/assets/images/portrait.png'} alt={'Ashton Winters'}/>
        <div>
          <p className="text-center font-garramond italic text-xl verticalindex:text-2xl mt-3 mb-5 text-gray-600">
            "Laughing at a puppet is funny. But laughing at a guy who thinks a puppet is funny is even funnier."
          </p>
          
          <p className="mb-5 font-garramond text-lg verticalindex:text-2xl">
            All content on this website is written by Ashton Winters. He's also the one who wrote that quote up there,
            and he always keeps it mind whenever he's writing any of these offbeat essays and stories.
          </p>
          <p className="mb-5 font-garramond text-lg verticalindex:text-2xl">
            He's always enjoyed writing, and he really got into writing comedy while studying at Yale. He is very handsome and is very good at bragging about himself in third person but he's
            getting kind of sick of it by this point to be honest so, strap on in, I'm getting personal and switching to first person now. 
          </p>
          <p className="mb-5 font-garramond text-lg verticalindex:text-2xl">  
            Yep, I changed it up on you there right in the middle of a sentence.Well, more like the end of the sentence but you get the gist. I do things like that, because I, or he, to switch back to third person for a second just for fun, enjoy writing things are entertaining to me.
            Hopefully you find them entertaining as well.
          </p>
        </div>
      </div>

      <div className="content verticalindex:hidden">
          <div className="flex flex-col items-center">
            <img className="object-scale-down w-2/5 h-2/5" src={'/assets/images/portrait.png'} alt={'Ashton Winters'}/>

            <div className="text-center flex flex-col p-4 w-4/5">
              <p className="font-garramond italic text-xl text-center text-gray-600 mb-5">
                "Laughing at a puppet is funny. But laughing at a guy who thinks a puppet is funny is even funnier."
              </p>

              <p className="font-garramond text-xl mb-5 text-left">
                All content on this website is written by Ashton Winters. He's also the one who wrote that quote up there,
                and he always keeps it mind whenever he's writing any of these offbeat essays and stories.
              </p>
              <p className="font-garramond text-xl mb-5 text-left">
                He's always enjoyed writing, and he really got into writing comedy while studying at Yale. He is very handsome and is very good at bragging about himself in third person but he's
                getting kind of sick of it by this point to be honest so, strap on in, I'm getting personal and switching to first person now. 
              </p>
              <p className="font-garramond text-xl mb-5 text-left">
                He's always enjoyed writing, and he really got into writing comedy while studying at Yale. He is very handsome and is very good at bragging about himself in third person but he's
                getting kind of sick of it by this point to be honest so, strap on in, I'm getting personal and switching to first person now. 
              </p>
              <p className="font-garramond text-xl mb-5 text-left">
              </p>
              <p className="font-garramond text-xl mb-5 text-left">
                Yep, I changed it up on you there right in the middle of a sentence.Well, more like the end of the sentence but you get the gist. I do things like that, because I, or he, to switch back to third person for a second just for fun, enjoy writing things are entertaining to me.
                Hopefully you find them entertaining as well.
              </p>
            </div>
          </div>  
      </div>
    </div>
  );
}
