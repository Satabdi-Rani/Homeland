import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <div className='mt-8 mx-auto'>
            <div className=''>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // autoplay
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img className='h-screen w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/cJtG2w5/slider-image-1.jpg" alt="" />
                        <div>
                            <h1></h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className='h-screen w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/PCc3b1V/slider-image-2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-screen w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/C0L81X6/slider-image-3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-screen w-full bg-cover bg-blend-overlay brightness-75' src="https://i.ibb.co/0VY308s/slider-image-4.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;