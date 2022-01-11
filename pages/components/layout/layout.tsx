import Head from 'next/head'
import Footer from "./footer"
import Header from "./header"


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>UltimateMedia</title>
        <meta name="description" content="The ultimate socila media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-[3.5rem]">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
