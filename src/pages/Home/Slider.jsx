import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'animate.css';

const Slider = () => {
    return (
        <div className='mt-8 mx-auto'>
            <div className='z-0'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // autoplay
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img className='h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-screen lg:w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/cJtG2w5/slider-image-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img className='h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-screen lg:w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/PCc3b1V/slider-image-2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-screen lg:w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/C0L81X6/slider-image-3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-screen lg:w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/0VY308s/slider-image-4.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='text-left z-10 absolute bg-[#160d0d9a] py-8 sm:py-12 xl:py-28 px-8 sm:px-12 xl:px-24 top-[200px] sm:top-[215px] lg:top-[320px] left-[100px] sm:left-[150px] lg:left-[320px] border-none rounded-lg  flex flex-col'>
                <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold animate__animated animate__shakeY'>Oxome Premium Flats</h1>
                <h2 className='text-md sm:text-lg md:text-2xl lg:text-4xl text-white mt-4 sm:mt-4 lg:mt-8 font-bold'>Provide a decent level of comfort</h2>
                {/* <button className='px-4 py-2 bg-transparent text-white border rounded-lg text-lg  w-36'>Contact Us</button> */}
                <button className='btn mt-4 sm:mt-5 lg:mt-8 w-28 sm:w-32 lg:w-48 hover:bg-yellow-400 text-md  sm:text-md lg:text-xl hover:text-[#262626] bg-transparent shadow-xl text-yellow-400 px-4 sm:px-5 lg:px-6  sm:py-2 border-[#FACC15] rounded-xl'>Contact Us</button>
            </div>
        </div>
    );
};

export default Slider;