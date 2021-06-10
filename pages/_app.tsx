import React from 'react'
import {Layout} from '../components'
import {AppProps} from 'next/app'

interface CustomAppProps extends AppProps{}

const App:React.FC<CustomAppProps> = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
