import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/colors.css'
import '@/styles/global.css'
import '@/styles/syntax.css'
import '@/styles/layers.css'
import 'mouse-follower/src/scss/index.scss'

import { Container } from '@/components'
import { theme } from '@/utils'
import { cursor, Magnetic } from '@/lib'

theme.load()

typeof window !== 'undefined' && cursor?.show()

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelectorAll('[data-magnetic]').forEach((element) => {
      new Magnetic(element)
    })
  }, [])
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
