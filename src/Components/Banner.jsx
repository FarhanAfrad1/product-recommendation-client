import React, { useEffect, useState } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Banner = () => {
    const sliderImage = [
        { src: "/smart_product_comparison.jpg" },
        { src: "/asking_for_advice.jpg" },
        { src: "/person_standing_at_a_dig.jpg" },
        { src: "/crowd_powered_recommendations.jpg" },
    ]
    const [current, setCurrent] = useState(0);
    const next = () => {

        if (current === sliderImage.length - 1) {
            setCurrent(0)
        }
        else {
            setCurrent(current + 1)
        }

    }


    const previous = () => {
        console.log(current)
        if (current === 0) {
            setCurrent(sliderImage.length - 1)
        }
        else {
            setCurrent(current - 1)
        }
    }

    useEffect(() => {
        const autoSlide = setInterval(() => {
            next();
        }, 3000)

        return () => clearInterval(autoSlide);
    }, [current])

    return (
        <div>
            <div className='w-full h-[550px] flex overflow-hidden relative mx-auto rounded-2xl'>
                <div
                    className='flex transition-transform ease-out duration-1000'
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {sliderImage.map((item, index) => (
                        <img key={index} src={item.src} alt={`Slide ${index}`} className="w-full flex-shrink-0 object-cover" />
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-5'>
                    <button className='bg-gray-600 opacity-50 hover:opacity-80 cursor-pointer rounded-full p-3' onClick={() => previous()}><FaAngleLeft size={40} color='white' /></button>
                    <button className='bg-gray-600 opacity-50 hover:opacity-80 cursor-pointer rounded-full p-3' onClick={() => next()}><FaAngleRight size={40} color='white' /></button>
                </div>
                <div className="absolute bottom-6 w-full flex justify-center gap-2">
                    {sliderImage.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3 rounded-full ${current === index ? 'bg-white' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;