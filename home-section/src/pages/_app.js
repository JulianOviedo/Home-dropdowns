import '@/styles/globals.css'
import Head from 'next/head'
import { Epilogue } from '@next/font/google'
import { ThemeProvider } from '@mui/material'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dropdowns</title>
      </Head>
      
      <ThemeProvider theme={theme}>
        <main className={epilogue.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
