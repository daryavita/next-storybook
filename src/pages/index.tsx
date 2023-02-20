import Head from 'next/head'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header></Header>
      <Footer/>
      <main>
      </main>
    </>
  )
}
