import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlayStation Cloned Site: Console, Games and acessories</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
