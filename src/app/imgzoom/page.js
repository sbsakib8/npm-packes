"use client";
import ReactImageMagnify from 'react-image-magnify';

let imgage = "./img/panjabi.jpeg"
function zoom() {


  return (
    <div>
        <h1>image Zoom Example</h1>

        <div className='w-[400px] h-[400px]'>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src : imgage,
                    width: 200,
                    height: 200
                },
                largeImage: {
                    src: imgage,
                    width: 1200,
                    height: 1800
                },
            }}/>
        </div>
    </div>
  )
}

export default zoom