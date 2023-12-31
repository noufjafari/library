import { useParams } from "react-router-dom";
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

function bookDetail() {
    const params = useParams()
    
        let bookData = null;

    if (params.id == '20'){
        bookData={
            image: `${book1}`,
            title:'قصر الكلام',
            author:'جلال عامر',
            summary:  'هذا الكتاب عبارة عن مجموعة من المقالات الساخرة المميزة التي تناقش الواقع المجتمعي المصري، من خلال نظرة جلال عامر للأحداث. فقد تميزت هذه المقالات بالسخرية الشديدة ولكنها في نفس الوقت لم تنعدم من خفة الدم والظرافة التي تميز أسلوبه في كل كتاباته.',
            price: 50.50,
        }
    }

    if (params.id == '21'){
        bookData={
            image: `${book2}`,
            title:'الفيل الأزرق',
            author:'أحمد مراد',
            summary:  'تنقل الرواية القارئ في رحلة مثيرة يستكشف فيها أغرب خبايا النفس البشرية، تحكي قصة يحيى طبيب نفسي يعود بعد خمس سنوات من العزلة الاختيارية للعمل في مستشفى العباسية للصحة النفسية، لتكون المفاجآت بانتظاره لتقلب حياته رأسًا على عقب ، فيجد صديق دراسته هناك حاملًا معه ماضٍ حاول يحيى جاهدًا أن ينساه فشقيقته هي حبيبة سابقة، ويجده متهمًا في قضية ودون سابق إنذار يصبح مصيره معلقًا بين يدي يحيى',
            price: 40.00,
        }
    }

    if (params.id == '22'){
        bookData={
            image: `${book3}`,
            title:'فن اللامبالاة: لعيش حياة تخالف المألوف',
            author:'الحارث النبهان , مارك مانسون',
            summary:  'فن اللامبالاة لعيش حياة تخالف المألوف هو كتاب رائع في التنمية البشرية للمؤلف العالمي الشهير مارك مانسون والذي يتحدّث فيهِ على أنّ الإنسان لا يجب بالضرورة أن يكونَ إيجابيّاً طوال الوقت، وأنّ المفتاح إلى بشر أكثر قوة وسعادة كامن في التعامل مع الشدائد تعاملاً أفضل، فيما يلي تلخيص كتاب فن اللامبالاة.',
            price: 55.00,
        }
    }

    if (params.id == '24'){
        bookData={
            image: `${book5}`,
            title:'نظرية الفستق',
            author:'فهد عامر الأحمدي',
            summary:  'يعود كتاب نظرية الفستق للكاتب والصحفي السعودي فهد عامر الأحمدي، حيث يتناول هذا الكتاب العديد من المواضيع التي تخص طرق التفكير البشري وكيفيّة تطوّرها، بالإضافة لبعض النصائح المهمة التي تساعد على فهم الذات، فيما يلي سنُسلط الضوء على أهم الأفكار التي وردت في كتاب نظرية الفستق.',
            price: 45.00,
        }
    }
    if (params.id == '23'){
        bookData={
            image: `${book4}`,
            title:'لأنك الله: رحلة إلى السماء السابعة',
            author:'علي جابر الفيفي',
            summary:  'يعدّ كتاب لأنك الله لمؤلفه الكاتب علي بن جابر الفيفي من الكتب البسيطة والقريبة من القلوب؛ كونه يحمل بين طيّاته رسائل روحانية تُضفي على النفوس الطمأنينة، وقد حظي هذا الكتاب بحصة كبيرة من الشهرة والاهتمام بين أوساط القرّاء، لذا عرضنا لكم في السطور التالية ملخصًا موجزًا له.',
            price: 60.00,
        }
    }

    if (params.id == '25'){
        bookData={
            image: `${book6}`,
            title:' نساء صغيرات',
            author:' لويزا ماي ألكوت ',
            summary:  ' هي رواية للمؤلفة الأمريكية لويزا ماي ألكوت كُتبت عام (1832-1888) والتي نُشرت في الأصل في مجلدين في عامي 1868 و 1869. ألّفت ألكوت الكتاب على مدار عدة أشهر بناءً على طلب ناشرها. تتبع القصة حياة الأخوات الأربع ميج، جو، بيث، وإيمي وتفاصيل انتقالهن من الطفولة إلى الأنوثة. إنها مبنية بشكل كبير على حياة الكاتبة وأخواتها الثلاث. يصنفها الكتاب على أنها رواية ذاتية أو شبه سيرة ذاتية.',
            price: 80.00,
        }
    }
    if (params.id == '27'){
        bookData={
            image: `${book8}`,
            title:'هاري بوتر وحجر الفيلسوف ',
            author:' ج.ك. رولينج',
            summary:  ' هاري بوتر وحجر الفيلسوف هي رواية فانتازية كتبتها الكاتبة البريطانية جاي. ك. رولينغ. أول رواية في سلسلة هاري بوتر وأول رواية لرولينغ، فهي تتبع حياة هاري بوتر، ساحر صغير يكتشف إرثه السحري في عيد ميلاده الحادي عشر، حينما يتسلم خطاب قبول في مدرسة هوغوورتس للسحر والشعوذة. يصبح لدى هاري أصدقاء مقربون وبعض الأعداء خلال سنته الأولى في المدرسة، وبمساعدة أصدقائه، يواجه هاري محاولة عودة الساحر الشرير اللورد فولدمورت، الذي قتل والدي هاري، لكنه لم يستطع قتل هاري عندما كان يبلغ من العمر خمسة عشر شهرًا.',
            price: 35.50,
        }
    }

    if (params.id == '26'){
        bookData={
            image: `${book7}`,
            title:' ما تُخبّئه لنا النجوم  ',
            author:' جون جرين ',
            summary:  ' ما تُخبّئه لنا النجوم بالإنجليزية: The Fault in Our Starsوتعني بالترجمة الحرفي الخطأ في أقدارنا رواية للكاتب الأمريكي جون جرين. تدور القصة حول هايزل غرايس فتاة مصابة بسرطان الغدة الدرقية والتي تقع في حب أوغاستس واترز المصاب بسرطان العظام. اسم الرواية مستوحى من حوار في مسرحية يوليوس قيصر، حيث يقول النبيل كاسيوس، مخاطبا بروتوس الخطأ، يا عزيزي بروتوس، ليس في نجومنا او أقدارنا، بل في أنفسنا، لأننا أشخاص ضئيلو الشأن.',
            price: 60.75,
        }
    }

    return (
      <>
                  <Nav/>
  <div className='bg-[#FAF8F1] py-20 '>
        
        {
        bookData != null ? 
        <>
        <div className=" flex justify-center gap-20 max-sm:gap-10 max-sm:flex-col ">
            <div className="border-gray-300 border-2 h-fit max-sm:w-40 max-sm:mt-5 max-sm:ml-28 mt-10"><img src={bookData.image} alt="" /></div>
        <div className=" py-3 flex flex-col w-96 max-sm:w-fit max-sm:ml-6 text-center mt-10 mb-10 gap-5">
        <div className="flex flex-row"><p className="text-2xl font-medium m-5 mx-10 max-sm:text-base w-80 max-sm:w-40">{bookData.title}</p><p className="py-6  max-sm:text-base">:العنوان</p></div>
        <div className="flex flex-row"><p className=" font-thin text-s max-sm:text-xs w-80 mx-9 max-sm:w-40 ">{bookData.author}</p><p className=" max-sm:text-base">:المؤلف </p></div>
       <div className="flex flex-row"><p className=" font-thin text-xs w-80 mx-9 max-sm:text-xs max-sm:w-40 "> {bookData.summary}</p> <p className="max-sm:text-base">:ملخص </p></div>
       <div className="flex flex-row"><p className="py-6 font-thin text-s w-80 mx-9 max-sm:text-xs max-sm:w-40"> ${bookData.price}</p> <p className="py-6  max-sm:text-base">:السعر </p></div>
        </div>
        </div>
        </> 
        : ''
        
        }
        
     </div>
     <Footer/>

      </>
    )
  }
  
  export default bookDetail
  