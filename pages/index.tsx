import { ReactElement } from "react";
import Layout from "./components/layout/layout";
import NestedLayout from "./components/layout/nestedLayout";
import Sidebar from "./components/layout/sidebar";
import ListView from "./components/listView";


function Home({ data }: { data: any }) {


  return (
    <div className="container flex mx-auto justify-center">
      <div className=" w-72 ">
        <Sidebar/>
      </div>

      <div className="">

        {
          data.map((item: any) => {
            return (
              <ListView key={item.id} data={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://pasteleriaaxiova-api.herokuapp.com/api/pasteles`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

Home.getLayout = function getLayout(home: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{home}</NestedLayout>
    </Layout>
  )
}

export default Home
