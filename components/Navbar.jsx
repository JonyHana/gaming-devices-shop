import Link from "next/link";

import style from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbarLinks}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar