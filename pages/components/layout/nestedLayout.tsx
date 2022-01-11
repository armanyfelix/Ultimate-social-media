import Navbar from "./navbar"


function NestedLayout({ children }) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}

export default NestedLayout
