import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperSection: NextPage = () => {
  return (
    <Swiper className="!overflow-hidden"
      modules={[Navigation, Pagination, Scrollbar]}
      loop={true}
      slidesPerView={1}
      spaceBetween={32}
      autoplay={{ delay: 1000 }}
      breakpoints={{
        640: {
          centeredSlides: true,
          slidesPerView: 1.5,
        },
        1024: {
          centeredSlides: true,
          slidesPerView: 2,
        },
      }}
      navigation={{
        nextEl: '.next-button',
        prevEl: '.prev-button',
      }}>
      <SwiperSlide>
        <blockquote className="flex h-full rounded-2xl border-blue-200 border-4 flex-col justify-between bg-white p-12">
          <div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                Lorem ipsum dolor sit amet.
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam cumque recusandae dolorum porro, quasi sunt
                necessitatibus dolorem ab laudantium vel.
              </p>
            </div>
          </div>
        </blockquote>
      </SwiperSlide>

      <SwiperSlide>
        <blockquote className="flex h-full rounded-2xl border-blue-200 border-4 flex-col justify-between bg-white p-12">
          <div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                Lorem ipsum dolor sit amet.
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam cumque recusandae dolorum porro, quasi sunt
                necessitatibus dolorem ab laudantium vel.
              </p>
            </div>
          </div>
        </blockquote>
      </SwiperSlide>

      <SwiperSlide>
        <blockquote className="flex h-full rounded-2xl border-blue-200 border-4 flex-col justify-between bg-white p-12">
          <div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                Lorem ipsum dolor sit amet.
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam cumque recusandae dolorum porro, quasi sunt
                necessitatibus dolorem ab laudantium vel.
              </p>
            </div>
          </div>
        </blockquote>
      </SwiperSlide>

      <SwiperSlide>
        <blockquote className="flex h-full rounded-2xl border-blue-200 border-4 flex-col justify-between bg-white p-12">
          <div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                Lorem ipsum dolor sit amet.
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam cumque recusandae dolorum porro, quasi sunt
                necessitatibus dolorem ab laudantium vel.
              </p>
            </div>
          </div>
        </blockquote>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperSection