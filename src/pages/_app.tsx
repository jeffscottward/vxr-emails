import type React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

interface Props<T> {
  pageProps: React.PropsWithChildren<T>
  Component: React.FC<T>
}

function StatefulApp({ pageProps, Component }: Props<any>) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

function MyApp({ Component, pageProps }: Props<any>) {
  return (
    <StatefulApp pageProps={pageProps} Component={Component} />
  )
}

export default MyApp
