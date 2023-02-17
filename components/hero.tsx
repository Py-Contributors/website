import type { NextPage } from 'next'

const Hero: NextPage = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#12a3e3] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-[#9ceb] text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-[#9ceb] text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="sm:text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                PyContributors <br /> Developer's Community
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl font-medium text-white">
                A community of Python programmers who are dedicated to empowering and recognizing contributors from around the world. Our mission is to create a collaborative and inclusive environment where Python enthusiasts of all skill levels can come together to share knowledge, work on projects, and grow their skills.
              </p>
            </div>
            <div className="mt-4 justify-center flex items-center scale-110">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2 text-lg font-bold leading-7 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero