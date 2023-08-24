import videobg from '../assets/y2mate.com - 本が開く_1080p (online-video-cutter.com).mp4';

function intro() {

    return (
      <>
      <div className="body">
      <video className='lg:w-screen opacity-75 ' src={videobg} autoPlay loop muted></video>
      <a href="/"><button className='btn'> أهـــــــلا بكم فـي مَكـــــتــــبــة</button></a>

    </div>
      </>
    )
  }
  
  export default intro

