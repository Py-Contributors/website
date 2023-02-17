import type { NextPage } from 'next'

import { Container } from './container'
import { Trello } from 'lucide-react'
import SwiperSection from './swiper-section'
import Link from 'next/link'

const Projects: NextPage = () => {
  return (
    <Container>
      <section>
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pr-6 lg:pr-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              <Trello className='scale-150 mb-2' />
              Projects
            </h2>
          </div>

          <p className="mx-auto mt-4 text-lg leading-7 tracking-wide text-slate-700 dark:text-slate-200">
            Our Projects, where we showcase our tech wizardry and code-slinging skills! <br />
            Be a part of our community and contribute to meaningful projects that are making a difference. <br />
            Explore our selection of projects and find the perfect opportunity to showcase your skills and make an impact.
          </p>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
          <div className="mb-8 flex justify-end">
            <button className="prev-button rounded-full border border-current p-3 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white focus:bg-blue-400 focus:text-white focus:outline-none">
              <span className="sr-only">Previous Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button className="next-button ml-3 rounded-full border border-current p-3 text-blue-400 focus:bg-blue-400 hover:bg-blue-400 hover:text-white focus:text-white focus:outline-none">
              <span className="sr-only">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
            <SwiperSection />
          </div>

          <div className="my-8 flex justify-center">
            <Link href=''>
              <button className="rounded-md bg-blue-600 px-3.5 py-2 text-lg font-bold leading-7 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                View All Projects
              </button>
            </Link>
          </div>

        </div>
      </section>
    </Container>
  )
}

export default Projects