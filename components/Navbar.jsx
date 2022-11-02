import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import Image from 'next/image';

import { logOut } from '../redux/auth.slice';
import styles from '../styles/Navbar.module.css';
import { Button } from '@mui/material';
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>DeltaForce</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href='/shop'>Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href='/cart'>
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
        {auth.session.loggedIn && (
          <li className={styles.navlink}>
            <Button onClick={handleSignOut}>
              <p>Sign Out</p>
            </Button>
          </li>
        )}
        {auth.session.loggedIn && (
          <li className={styles.navlink}>
            <Link href='/'>
              <Image
                alt='avatar'
                className={styles.img}
                height={30}
                width={30}
                src='https://imgur.com/9pNffkj.png'
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
