import Nav from "../Components/nav";
import Footer from "../Components/footer";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import shelf from "../assets/bookshelf.png";

function home() {
  return (
    <>
            <Nav/>
            {/* <img src={logo } className=" bg-[#FAF8F1] w-screen h-70 opacity-90 " /> */}
            <div className="bg-[#FAF8F1] w-auto flex flex-col gap-20 justify-center ">
                <div className=" flex flex-col gap-16 max-sm:gap-8 max-sm:my-5 my-10 justify-center content-center text-center">
                <h1 className="max-sm:text-4xl text-8xl font-bold mt-10"> مــــكـــــــتَــــــتـبــــــة</h1> 
                    <p className="max-sm:text-xs text-[#F4D160] text-xl">وَخَـــيْـــــرُ جَـــلِــيـــــْسٍ فــــي الــزَّمــــانِ كــــِتـــــابُ</p>
                </div>
                <hr className="text-gray-300"/>
            </div>

    <div className="bg-[#FAF8F1] py-20">

        
        <div className="text-4xl max-sm:text-lg max-sm:mt-5 max-sm:mb-10 font-lighter text-center mt-10 mb-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300">
            <h2 >الـكـــــتــــــــب الأكــثر مبيــعا</h2>                
        </div>

        <div className="grid grid-cols-4 justify-items-center max-sm:grid-cols-1 max-sm:mt-0 mt-20  ">
        <div className="w-40 h-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 flex justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg "><a href="/book/20"><img src={ book1} /></a></div>
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
        <div className="w-40 h-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/21"><img src={ book2} /></a></div>       
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div> 
        <div className=" flex h-38 w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/22"><img src={ book3} /></a></div>
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
        <div className=" flex justify-center w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/23"><img src={ book4} /></a></div>
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
     </div>  


    <div className="grid grid-cols-4 justify-items-center mb-20 max-sm:hidden">
    <div className="lg:w-60 sm:w-40">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 sm:w-40">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 sm:w-40">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 sm:w-40">
        <img src={ shelf} />
    </div>
    </div>

    <div className="grid grid-cols-4 justify-items-center mt-20 max-sm:grid-cols-1 max-sm:mt-0 ">
        <div className="lg: flex justify-center w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg "><a href="/book/24"><img src={ book5} /></a></div>
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
        <div className="lg:flex justify-center w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/25"><img src={ book6} /></a></div>        
        
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
        <div className="lg:flex justify-center w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/26"><img src={ book7} /></a></div>
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden">
        <img src={ shelf} />
        </div>
        <div className="lg:flex justify-center w-40 max-sm:mt-16 max-sm:h-28 max-sm:w-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/27"><img src={ book8} /></a></div>
     
        <div className="lg:w-60 max-sm:w-40 max-sm:mt-8 lg:hidden ">
        <img src={ shelf} />
        </div>
        </div>  


    <div className="grid grid-cols-4 justify-items-center mb-20 max-sm:hidden">
    <div className="lg:w-60 ">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 ">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 ">
        <img src={ shelf} />
    </div>
    <div className="lg:w-60 ">
        <img src={ shelf} />
    </div>
    </div>


    </div>
    <Footer/>
    </>
  )
}

export default home
