import { useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

function initCookies() {
}

function checkForCookies() {
  return false;
}

const Layout = ({ children }) => {
  const [hasCookies, setHasCookies] = useState(checkForCookies());

  return (
    <>
        <Head>
            <title>Esports Gaming Devices</title>
            <meta name='keywords' content='gaming, esports, gaming equipment, gaming devices' />
        </Head>
        <Navbar />
        {children}
        {hasCookies ? // TODO: cookie warning popup overlay on bottom of page.
          <div>
          </div>
        : null}
    </>
  )
}

export default Layout