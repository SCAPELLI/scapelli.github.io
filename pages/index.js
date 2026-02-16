import Head from "next/head";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import { useRouter } from "next/router";
import en from "../public/locales/en";
import es from "../public/locales/es";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div className="bg-gradient-to-b from-customGray via-red-950 to-black">

      <Head>
        <title>Sebastián Capelli</title>
        <meta
          name="description"
          content="Sebastián Capelli, maded in NextJs with TailWind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
    </div>
  );
}
