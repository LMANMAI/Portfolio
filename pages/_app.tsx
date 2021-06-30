import React from "react";
import { Layout } from "../components";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/Theme";
import GlobalStyle from "../assets/Global";
import Head from "next/head";
interface CustomAppProps extends AppProps {}

const App: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sansita:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aclonica&family=Berkshire+Swash&display=swap"
          rel="stylesheet"
        />
        <title>Lucas Maidana</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
