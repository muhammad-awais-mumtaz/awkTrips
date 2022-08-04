import styles from "../styles/about.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout/layout";
import Partner from "../components/partner/partner";
import Head from "next/head";

export default function About() {
  const partners = [
    {
      id: 1,
      name: "Muhammad Abuzar",
      designation: "CEO, Founder",
      detail:
        "Meet Abuzar who is CEO and founder of AwkTrips. He is also responsible to manage every trip or event. He is a great photographer and manager also.",
      pic: "/about-pic/abuzar.JPg",
      instagram: "https://www.instagram.com/its_.abuzar/",
      twitter: "https://www.twitter.com",
    },
    {
      id: 2,
      name: "Muhammad Awais",
      designation: "Co-founder",
      detail:
        "Meet Awais co-founder of AwkTrips. He is responsible for website to be upto date. He is also a great programmer and observer.",
      pic: "/about-pic/myself.jpg",
      instagram: "https://www.instagram.com/m_owais_mumtaz_awan/",
      twitter: "https://twitter.com/_awksoft",
    },
  ];
  return (
    <Layout home={false}>
      <Head>
        <title>about</title>
      </Head>
      <div className={`${styles.aboutContainer} ${utilStyles.fontDark}`}>
        <h1>Hello Everyone!</h1>
        {partners.map((partner) => {
          return <Partner key={partner.id} partner={partner} />;
        })}
      </div>
    </Layout>
  );
}
