import { FunctionComponent } from "react";
import BigHero from "../components/Bighero";
import Layout from "../layout/Layout";

const Home: FunctionComponent = () => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return(
    <Layout>
      <div>
        <BigHero></BigHero>
      </div>
    </Layout>
  )
}

export default Home;