import type { NextPage } from 'next'
import { Pattern } from './pattern'

const Metrics: NextPage = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Our Community Metrics
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-2">
          Discover the facts and figures that make up our vibrant community.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="text-slate-900/20 dark:text-white/20">
            <Pattern x="20%" patternTransform="translate(0 30)" />
          </div>
          <div className="absolute inset-0 h-1/2 " />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-2xl sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-8 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-2xl font-medium leading-6 text-slate-600">Members</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-400">700+</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-8 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-2xl font-medium leading-6 text-slate-600">Projects</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-400">10+</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-8 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-2xl font-medium leading-6 text-slate-600">Contributors</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-400">300+</dd>
                </div>
              </dl>
              {/* <dl className="rounded-lg mt-10 bg-white shadow-2xl sm:grid sm:grid-cols-2">
                <div className="flex flex-col border-t border-b border-gray-100 p-8 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-2xl font-semibold leading-6 text-slate-600">Onboarded Companies</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-400">10+</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-8 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-2xl font-semibold leading-6 text-slate-600">Experienced Mentors</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-400">100+</dd>
                </div>
              </dl> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics