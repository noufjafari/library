// import logo from '../assets/books-stack-of-three (1).png';
interface contant {
    src:string;}
function details(props:contant) {

    return (
      <>

        <div>
        
        <img className="w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src}/>
      
   
        </div>


      </>
    )
  }
  
  export default details
