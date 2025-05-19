import '../styles/globals.css'
import Menu from '../components/Menu'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}