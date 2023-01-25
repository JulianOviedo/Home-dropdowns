import '@/styles/globals.css'
import { Epilogue } from '@next/font/google'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={epilogue.className}>
      <Component {...pageProps} />
    </main>
  )
}
