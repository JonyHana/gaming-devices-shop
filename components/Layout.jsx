import Head from 'next/head';
import Navbar from './Navbar';

function initCookieUID() {
  // TODO: set uuid userid (for cart)
}

function checkForCookieUID() {
  return false;
}

const Layout = ({ children }) => {
  const [hasCookies, setHasCookies] = useState(checkForCookieUID());

  return (
    <>
        <Head>
            <title>Esports Gaming Devices</title>
            <meta name='keywords' content='gaming, esports, gaming equipment, gaming devices' />
        </Head>
        <Navbar />
        {children}
        {hasCookies ? <div></div> : null}
    </>
  )
}

export default Layout