import type { NextPage } from 'next';
import Head from 'next/head';

import { AncestralVeganism, Banner, Chef, Footer, InclusiveCuisine, Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Veganismo Ancestral</title>
      </Head>
      <Navbar />
      <Banner />
      <InclusiveCuisine />
      <AncestralVeganism />
      <Chef />
      <Footer />
    </>
  )
}

export default Home
