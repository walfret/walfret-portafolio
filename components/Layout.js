import Navigation from "./Navigation";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Desarrollador web</title>
    </Head>
    <Navigation />
    {children}
  </>
);

export default Layout;
