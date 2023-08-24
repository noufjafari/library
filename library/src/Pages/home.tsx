import Nav from "../Components/nav";
import Footer from "../Components/footer";


import logo from '../assets/logooo (1).png';
import book1 from "../assets/book1.jpg";
import book2 from "../assets/Book2.jpg";
import book3 from "../assets/Book3.jpg";
import book4 from "../assets/Book4.jpg";
import book5 from "../assets/Book5.jpg";
import book6 from "../assets/Book6.jpg";
import book7 from "../assets/Book7.jpg";
import book8 from "../assets/Book8.jpg";
import shelf from "../assets/bookshelf.png";


function home() {
  return (
    <>
            <Nav/>
            <img src={logo } className=" bg-[#FAF8F1] w-screen h-70 opacity-90 " />

    <div className="bg-[#FAF8F1] py-20">

        
        <div className="text-7xl font-lighter text-center mt-10 mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300"><h2 >الـكـــــتــــــــب الأكــثر مبيــعا</h2></div>

        <div className="grid grid-cols-4 justify-items-center mt-20  ">
        <div className="lg:w-40 flex justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg "><a href="/book/20"><img src={ book1} /></a></div>
        <div className="lg:w-40 flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/21"><img src={ book2} /></a></div>        
        <div className="lg:w-40 flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/22"><img src={ book3} /></a></div>
        <div className="lg:w-40 flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/23"><img src={ book4} /></a></div>
     </div>  


    <div className="grid grid-cols-4 justify-items-center mb-20">
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

    <div className="grid grid-cols-4 justify-items-center mt-20 ">
        <div className="lg: flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg "><a href="/book/24"><img src={ book5} /></a></div>
        <div className="lg:flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/25"><img src={ book6} /></a></div>        
        <div className="lg:flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/26"><img src={ book7} /></a></div>
        <div className="lg:flex justify-center w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg"><a href="/book/27"><img src={ book8} /></a></div>
     </div>  


    <div className="grid grid-cols-4 justify-items-center mb-20">
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

    </div>
    <Footer/>
    </>
  )
}

export default home
