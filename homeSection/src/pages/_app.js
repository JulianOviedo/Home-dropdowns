import '@/styles/globals.css'
import { Epilogue } from '@next/font/google'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../mui-theme'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={epilogue.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>

  )
}
