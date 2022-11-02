import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { iniateLoginWithMpesa } from '../redux/auth.slice';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const HomePage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (evt) => {
    evt.preventDefault();
    const prelogin = {
      loginType: 'Mpesa',
      status: 'inProgress',
    };
    dispatch(iniateLoginWithMpesa(prelogin));
    router.push(
      `/m-auth/authenticate?state=dfasfasdfasfkasfsdafafdafewef&actionType=login`
    );

    // const res = await fetch('http://localhost:3005/login', {
    //   method: 'POST',
    //   body: {
    //     loginType: 'MPesa',
    //   },
    // });
  };

  return (
    <main className={styles.container}>
      {!auth.session.loggedIn && (
        <Button onClick={handleLogin}>Login with Mpesa</Button>
      )}
      <div className={styles.small}>
        <CategoryCard image='https://imgur.com/uKQqsuA.png' name='Xbox' />
        <CategoryCard image='https://imgur.com/3Y1DLYC.png' name='PS5' />
        <CategoryCard image='https://imgur.com/Dm212HS.png' name='Switch' />
      </div>
      <div className={styles.large}>
        <CategoryCard image='https://imgur.com/qb6IW1f.png' name='PC' />
        <CategoryCard
          image='https://imgur.com/HsUfuRU.png'
          name='Accessories'
        />
      </div>
    </main>
  );
};

export default HomePage;

/**
 * add callback logic to handle login https://m-duka.vercel.app/callback
 */
