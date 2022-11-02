import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [hasCookies, setHasCookies] = useState(true);

  useEffect(() => {
    setHasCookies(localStorage.getItem('cart') ? true : false);
  }, []);

  const buttonAcceptCookies = (e) => {
    localStorage.setItem('cart', '{}');
    setHasCookies(true);
  }
  
  return (
    <>
        <Head>
            <title>Esports Gaming Devices</title>
            <meta name='keywords' content='gaming, esports, gaming equipment, gaming devices' />
        </Head>
        <Navbar />
        {children}
        {!hasCookies
        ? <div className='cookie-popup'>
          <span>This site uses cookies to provide and improve your experience. By using this site, you consent to the use of cookies.</span>
          <button onClick={buttonAcceptCookies}>Accept Cookies</button>
        </div>
        : null}
    </>
  )
}

export default Layout