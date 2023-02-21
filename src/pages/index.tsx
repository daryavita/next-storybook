import Head from 'next/head'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Cookie } from '@/components/Cookie'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Footer/>
      <Cookie/>
      <main>
      </main>
    </>
  )
}
