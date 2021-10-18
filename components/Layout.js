import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "@/components/Showcase";
export default function Layout({ title, keywords, description, children }) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Dj Events | find the hottest parties",
  description: "Find the dj and other musical events",
  keywords: "Dj, music, events, band, party, concert, edm",
};
