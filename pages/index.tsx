import Hero from '@/components/hero'
import { Navbar } from '@/components/navbar'
import Projects from '@/components/project-carousel'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <Projects />
    </>
  )
}

export default Home
