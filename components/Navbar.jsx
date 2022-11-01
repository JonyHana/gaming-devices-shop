import Link from "next/link";
import { useEffect } from "react";

import style from '../styles/Navbar.module.css';

const Navbar = () => {
  //const [cartCount, setCartCount] = useState(0);

  // https://stackoverflow.com/questions/72238175/useeffect-is-running-twice-on-mount-in-react
  /*useEffect(() => {
    console.log('useEffect Navbar');
  }, []);*/

  return (
    <nav className={style.navbar}>
      <ul className={style.navbarLinks}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/cart'>Cart</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar