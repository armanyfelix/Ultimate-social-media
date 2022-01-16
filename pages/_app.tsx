import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="class">
        <RecoilRoot>
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
