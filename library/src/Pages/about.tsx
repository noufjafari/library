import Nav from "../Components/nav";
import Footer from "../Components/footer";
import imgB1 from "../assets/book.png";
import imgB2 from "../assets/stack-of-books.png";
import imgB3 from "../assets/open-book.png";


function about() {

    return (
      <>
      <Nav/>

      <div className="bg-[#FAF8F1] py-20 max-sm:py-0">

      <div className=" py-3 gap-9 flex flex-col justify-center text-center">
      <h1 className="text-6xl max-sm:text-2xl font-bold text-center mt-10"> مَـــــــن مكــــــتَـــــتبــــــة ؟</h1> 
      <p className="py-6 font-thin text-center  max-sm:text-[0.70rem]  max-sm:w-48  max-sm:ml-24 max-sm:py-3 max-sm:m-0 text-base m-9 mb-2 ">مكتبة هي ملاذٌ للقراء ومحبي العلم والكتب والمعرفة، إذ تعد  من أحد المكتبات المتنوعة،<br></br> حيث تضم أكثر من كتاب. وتتميز مَكتبة بكونها مساحة للتعرف وشراء الكتب فهي مصممة<br></br> لمراعاة محبين القراءة لتساعدهم على الاكتشاف والسعي وراء المعرفة.</p>
      <hr className="text-gray-300 my-16 max-sm:my-6"/>

    </div>
      


    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:my-5 max-sm:m-0 m-20">

        <div className="  py-3 gap-9 flex flex-col justify-center w-96 max-sm:w-80 max-sm:ml-7 max-sm:my-7 max-sm:gap-3  text-center ">
        <div className="flex justify-center"><img className=" w-20 max-sm:w-10 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={imgB1}/></div>
        <p className="text-xl max-sm:text-base font-lighter mt-5 mx-10 w-65">عندما نجمع الكتب نجمع السعادة</p>
        <p className="py-6 font-thin text-s max-sm:text-sm mx-9 mb-2 ">- فنسنت ستاريت -  </p>
        </div>

        <div className="  py-3 gap-9 flex flex-col justify-center w-96 max-sm:w-80 max-sm:ml-7 max-sm:my-7  max-sm:gap-3 text-center">
        <div className="flex justify-center"><img className="w-20 max-sm:w-10 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={imgB2}/></div>
        <p className="text-xl max-sm:text-base font-lighter mt-5 mx-10 w-65">الكتاب هدية يمكنك فتحها مرارًا وتكرارًا</p>
        <p className="py-6 font-thin text-s max-sm:text-sm mx-9 mb-2 ">- جاريسون كيلور -</p>
        </div>


        <div className="   py-3 gap-9 flex flex-col justify-center self-center max-sm:w-80 max-sm:ml-7  max-sm:gap-3 max-sm:my-7 w-96 text-center ">
        <div className="flex justify-center"><img className=" w-20 max-sm:w-10 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={imgB3}/></div>
        <p className="text-xl max-sm:text-base font-lighter mt-5 mx-10 w-65">الكتاب هو الحلم الذي تحمله بين يديك  </p>
        <p className="py-6 font-thin text-s max-sm:text-sm mx-9 mb-2 ">- نيل جايمان -</p>
        </div>
        </div>
    </div>

      <Footer/>

      </>
    )
  }
  
  export default about
  