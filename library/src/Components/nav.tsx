import logo from '../assets/books-stack-of-three (1).png';

function nav() {

    return (
      <>
      <div className=' '>
      <div className="max-sm:w-full max-sm:mx-0  max-sm:gap-3 max-w-screen-xl mx-20 py-3  my-3 gap-9 flex flex-row justify-between">

      <img className='w-10 max-sm:ml-9 max-sm:w-7 max-sm:mt-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' src={logo} />

            <ul className=" my-2 flex flex-row gap-7 max-sm:gap-0 ">   
      <li className='max-sm:w-24'><a className="max-sm:text-[0.70rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300" href='/'>الصفحـة الرئيـسية</a></li>
                <li className='max-sm:w-20'><a className="max-sm:text-[0.70rem] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#F4D160] duration-300" href='/about'>مـن نـحـن</a></li>
            </ul>
        </div>
     </div>


      </>
    )
  }
  
  export default nav
  