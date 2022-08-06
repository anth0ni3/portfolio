import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// @ts-ignore
import { PageTransition } from 'next-page-transitions'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import '@/styles/colors.css'
import '@/styles/global.css'
import '@/styles/syntax.css'
import '@/styles/layers.css'
import 'mouse-follower/src/scss/index.scss'

import { Container } from '@/components'
import { theme } from '@/utils'
import { cursor, Magnetic, scrollbar } from '@/lib'

theme.load()

typeof window !== 'undefined' && cursor?.show()

const TIMEOUT = 200

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelectorAll('[data-magnetic]').forEach((element) => {
      new Magnetic(element)
    })

    gsap.registerPlugin(ScrollTrigger)

    const scroller = document.getElementById('__next')! as HTMLElement

    const bodyScrollBar = scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true })

    ScrollTrigger.scrollerProxy('#__next', {
      scrollTop(value) {
        if (arguments.length) {
          // @ts-ignore
          bodyScrollBar.scrollTop = value
        }
        return bodyScrollBar.scrollTop
      },
    })

    bodyScrollBar.addListener(ScrollTrigger.update)

    ScrollTrigger.defaults({ scroller: scroller })
  }, [])
  return (
    <>
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={'fff'}
          loadingDelay={500}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <Component {...pageProps} />
        </PageTransition>
      </Container>
      {/*
 // @ts-ignore */}

      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 0;
          display: none;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>
  )
}

export default MyApp
