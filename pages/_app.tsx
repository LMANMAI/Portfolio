import React from 'react'
import {Layout} from '../components'
import {AppProps} from 'next/app'
import { ThemeProvider} from 'styled-components'
import theme from '../assets/Theme';
import GlobalStyle from '../assets/Global';

interface CustomAppProps extends AppProps{}

const App:React.FC<CustomAppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
