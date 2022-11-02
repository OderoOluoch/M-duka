import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { doLogin, iniateLoginWithMpesa } from '../redux/auth.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [cardSession, setCardSession] = useState(uuidv4());

  const cart = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log('USER', userState);

  useEffect(() => {
    console.log('localStorage', window, window.localstorage);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  // const handleLogin = async () => {
  //   console.log("@@@");
  //   await dispatch(doLogin({
  //     username: "C Ronaldo",
  //     phone: "0712345678"
  //   }));
  //   setAuthDialogOpen(false)
  // }

  const router = useRouter();

  const handleInitiateLogin = async (e) => {
    e.preventDefault();
    const login = {
      preloginSession: cardSession,
      loginProvider: 'Mpesa',
    };
    console.log('@@@');
    if (window !== undefined) {
      window.localStorage.setItem('login', JSON.stringify(login));
    }

    console.log('saved info', window.localStorage.getItem('login'));
    await dispatch(iniateLoginWithMpesa(login));
    setAuthDialogOpen(false);
    router.push(`/m-auth/authenticate?state=${cardSession}`);
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body} key={item.id}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt='Product Image'
                  height='90'
                  width='65'
                />
              </div>
              <p>{item.product}</p>
              <p>Ksh {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>Ksh. {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: Ksh. {getTotalPrice()}</h2>
          {userState.user ? (
            <button onClick={() => setCheckoutDialogOpen(true)}>
              <h2>Checkout With Mpesa</h2>
            </button>
          ) : (
            <button onClick={() => setAuthDialogOpen(true)}>
              <h2>Login to Checkout</h2>
            </button>
          )}
          <Modal
            open={authDialogOpen || checkoutDialogOpen}
            onClose={() => {
              userState.user
                ? setAuthDialogOpen(false)
                : setCheckoutDialogOpen(false);
            }}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Log in to your account
              </Typography>
              <Button
                onClick={handleInitiateLogin}
                sx={{
                  border: '1px solid',
                  marginTop: '1rem',
                }}
              >
                Login with Mpesa
              </Button>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default CartPage;
