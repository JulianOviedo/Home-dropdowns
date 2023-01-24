import '@/styles/globals.css'
import Head from 'next/head'
import { Epilogue } from '@next/font/google'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dropdowns</title>
      </Head>
      <main className={epilogue.className}> 
      <Component {...pageProps} />
      </main>
    </>
  )
}
