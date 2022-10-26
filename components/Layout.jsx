import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Esports Gaming Devices</title>
            <meta name='keywords' content='gaming, esports, gaming equipment, gaming devices' />
        </Head>
        <Navbar />
        {children}
    </>
  )
}

export default Layout