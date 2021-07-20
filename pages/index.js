import Head from "next/head";
import Header from "./components/Header";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* body */}
    </div>
  );
}
