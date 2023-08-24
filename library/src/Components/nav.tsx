import logo from '../assets/books-stack-of-three (1).png';

function nav() {

    return (
      <>
      <div className=' '>
      <div className="  max-w-screen-xl mx-20 py-3 gap-9 flex flex-row justify-between">

      <a href='/intro'><img className='w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' src={logo} /></a>

            <ul className=" my-2 flex flex-row gap-7 ">   
      <li ><a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300" href='/'>الصفحـة الرئيـسية</a></li>
                <li ><a className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300" href='/about'>مـن نـحـن</a></li>
            </ul>
        </div>
     </div>


      </>
    )
  }
  
  export default nav
  