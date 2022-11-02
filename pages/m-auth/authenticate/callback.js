/**
 * Update login details from Mpesa m-auth service
 * update state to already logged in
 * or for transactions details
 * @returns
 */
import { useSelector, useDispatch } from 'react-redux';
// import { doLogin } from '../redux/auth.slice';
import { doLogin } from '../../../redux/auth.slice';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Authenticate() {
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();
  console.log('query params', query);
  useEffect(() => {
    dispatch(
      doLogin({
        loggedin: true,
        sub: '254711258170',
        jti: '3d1da672-b7cc-403e-918e-9dc0cb5bf76b',
        exp: 1667373476,
        iss: 'm-auth.safaricom.co.ke',
        name: 'Mbarak M. Mbigo',
        msisdn: '254711258170',
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTQ3MTEyNTgxNzAiLCJqdGkiOiIzZDFkYTY3Mi1iN2NjLTQwM2UtOTE4ZS05ZGMwY2I1YmY3NmIiLCJleHAiOjE2NjczNzM0NzYsImlzcyI6Im0tYXV0aC5zYWZhcmljb20uY28ua2UiLCJuYW1lIjoiTWJhcmFrIE13YW5nb21lIE1iaWdvIiwibXNpc2RuIjoiMjU0NzExMjU4MTcwIn0.A0UDpHETakJZDBll_r3BrnSMqjS6_NYgDybCOeZy-wg',
      })
    );

    router.push('/cart');
  }, []);
  return <h1>Please wait... </h1>;
}
