import "./App.scss";

function App() {
  return (
    <div className="w-full h-screen bg-[#272627] relative  text-white">
      {/* Navbar */}
      <div class="nav">
        <div className="w-fit h-[60px] text-[12px] space-x-10 font-serif flex items-center fixed right-10 top-5 z-10">
          <span className="text-[#ADB525]">HOME</span>
          <span>ABOUT</span>
          <span>PORTFOLIO</span>
          <span>SERVICES</span>
          <span>CONTACT</span>
        </div>
      </div>
      {/* logo */}
      <div className="logo">
        <div
          className=" text-[#00CA72] text-[30px] -rotate-90 w-fit fixed left-5 top-20 -space-y-5"
          style={{ fontFamily: "fantasy" }}
        >
          <div>GREEN</div>
          <div className="">SUNDAY</div>
        </div>
      </div>
      {/* contact. */}
      <div className=" font-serif rotate-90 fixed right-5 top-[50%] font-thin">
        contact.
      </div>
      {/* social. */}
      <div className=" font-serif -rotate-90 fixed left-5 top-[50%] font-thin">
        social.
      </div>
      {/* content */}
      {/* Home */}
      <div
        className="w-full h-screen text-[100px] flex justify-center items-center relative"
        style={{ fontFamily: "fantasy" }}
      >
        {/* <div class="glitch">GREEN SUNDAY</div> */}
        <div class="glitch" data-text="GREENSUNDAY">
          GREENSUNDAY
        </div>
        <div className=" absolute font-mono right-28 bottom-5 font-thin text-[12px]">
          <p>creative studio</p>
          <p>ICT. 2023</p>
        </div>
        {/* <img
          className=" absolute w-[200px]"
          src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG1.png"
        />
        <img
          className=" absolute w-[200px]"
          src="https://pngimg.com/d/simpsons_PNG9.png"
        /> */}
      </div>
      {/* element1 */}
      <div className=" w-full h-[700px] bg-[#282828] flex flex-col justify-center">
        <div className="flex flex-row pl-[150px]">
          <div className="text-[18px] font-mono font-thin">
            <p>How we</p>
            <p>think</p>
          </div>
          <div className="w-[100px] px-5 pt-3">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/844/878/small/arrow-icon-design-free-png.png" />
          </div>
          <div
            className=" text-7xl text-white"
            style={{ fontFamily: "fantasy" }}
          >
            <div>
              <span className="text-[#CED725]">INSIGHT</span>
              <span>LED CONTENT</span>
              <span className="text-[#00CA72]">PRODUCTION</span>,
            </div>
            <div>
              <span>CHALLENGING THE WAY WE </span>
              <span className="text-[#EF4B69]">THINK</span>
              <span>, DAILY TO</span>
            </div>
            <div>
              <span>CREATE </span>
              <span className="text-[#E29829]">RESULTS </span>
              <span>THAT MATTER.</span>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="pb-[6px] pt-1 px-2 mt-10 border cursor-pointer rounded-lg border-white font-mono font hover:bg-white hover:text-[#00CA72] duration-300">
            enquire now
          </div>
        </div>
      </div>
      {/* element2 */}
      <div className="w-full h-[440px] bg-[#282828] flex flex-row pt-[50px]">
        <div className="font-mono font-thin text-lg pl-[200px] pt-[20px] leading-none">
          <p>WE HELP BRANDS</p>
          <p>GROW AND BE SEEN IN</p>
          <p>3 EASY STEPS</p>
        </div>
        <div className="pl-[200px]">
          <div className=" border-b border-[#CED725] w-[500px] h-[80px]">
            <span
              className=" text-[60px] text-[#CED725] "
              style={{ fontFamily: "fantasy" }}
            >
              KNOWLEDGE
            </span>
          </div>
          <p className="font-mono font-thin w-[500px] pt-1 leading-none">
            We use audience research and understanding of our subjects, to shape
            our product and ultimately looking at how best to engage.
          </p>
          <p className="font-mono font-thin text-[12px] pt-[50px] leading-none">
            STRATERGY/
          </p>
          <p className="font-mono font-thin text-[12px] leading-none">
            RESEARCH/DEVELOPMENT
          </p>
        </div>
      </div>
      {/* element3 */}
      <div className=" w-full h-[300px] bg-[#282828] flex flex-row">
        <img
          className="h-full w-[50%] object-cover"
          src="https://static.wixstatic.com/media/d44a06_63b52924589d4ba797c36458ab87b213~mv2.gif"
        />
        <div className="pt-[20px] pl-[20px]">
          <div className=" border-b border-[#EF4B69] w-[500px] h-[80px]">
            <span
              className=" text-[60px] text-[#EF4B69] "
              style={{ fontFamily: "fantasy" }}
            >
              CREATION
            </span>
          </div>
          <p className="font-mono font-thin w-[500px] pt-1 leading-none">
            We remove the blinkers and take each project on with a fresh
            perspective. No project is the same and therefore do not get treated
            like it.
          </p>
          <p className="font-mono font-thin text-[12px] pt-[120px] leading-none">
            PRODUCTION/
          </p>
          <p className="font-mono font-thin text-[12px] leading-none">
            TECHNICAL/MEDIA
          </p>
        </div>
      </div>
      {/* element4 */}
      <div className="w-full h-[350px] bg-[#282828] flex flex-row items-center relative">
        <div className="pl-[350px]">
          <div className=" border-b border-[#00CA72] w-[500px] h-[80px]">
            <span
              className=" text-[60px] text-[#00CA72] "
              style={{ fontFamily: "fantasy" }}
            >
              RESULTS
            </span>
          </div>
          <p className="font-mono font-thin w-[500px] pt-1 leading-none">
            We help you reach the audience you want to, speak in a new way or
            amplify your message. By implementing creativity with data, we make
            content that engages and affects your audience
          </p>
          <p className="font-mono font-thin text-[11px] pt-[30px] leading-none">
            REACH/
          </p>
          <p className="font-mono font-thin text-[11px] leading-none">
            SOCIAL/FEEDBACK
          </p>
        </div>
        <img
          className="w-14 h-14 absolute bottom-20 right-[30%]"
          src="https://www.citypng.com/public/uploads/preview/hd-add-insert-white-icon-symbol-transparent-background-11639609669viot70szzx.png?v=2023071506"
        />
      </div>
    </div>
  );
}

export default App;
