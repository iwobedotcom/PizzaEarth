import axios from "axios";
import Head from "next/head";
import Chefs from "../components/Chefs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

export default function Home({ pizzaList, admin }) {
  return (
    <>
      <Head>
        <title>
          Pizza Earth - Order Pizza and have it delivered at light-speed.
        </title>
        <meta
          name="description"
          content="Order your favorite pizza online and have it delivered at light-speed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Pricing pizzaList={pizzaList} admin={admin} />
      <Chefs />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: response.data,
      admin,
    },
  };
}
